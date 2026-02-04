import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '@/AuthContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { User, LogOut, LogIn, UserPlus, Menu, X, Phone, MessageCircle, Eye, EyeOff, Mail } from 'lucide-react';
import ContactDrawer from "./ContactDrawer";

// --- FIREBASE FOR GOOGLE & RESET ---
import { getAuth, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Re-initialize for local usage (Works with Context)
const firebaseConfig = {
  apiKey: "AIzaSyCtyR68dG9TEI_C89PvsdrGmpkE6vCtV0s",
  authDomain: "varanasi-scoot-darshan.firebaseapp.com",
  projectId: "varanasi-scoot-darshan",
  storageBucket: "varanasi-scoot-darshan.firebasestorage.app",
  messagingSenderId: "437910870938",
  appId: "1:437910870938:web:cb7b3043bcc39216143823"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Header() {
  const { user, login, signup, logout } = useAuth();
  const { toast } = useToast();
  
  // UI States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  
  // Logic States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle Password
  const [resetMode, setResetMode] = useState(false); // Forgot Password Mode

  // Forms
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '', phone: '' });
  const [resetEmail, setResetEmail] = useState('');

  // --- GOOGLE LOGIN ---
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast({ title: "Success!", description: "Logged in with Google" });
      setLoginOpen(false);
    } catch (error: any) {
      console.error(error);
      toast({ title: "Google Login Failed", description: "Please try again.", variant: "destructive" });
    }
  };

  // --- FORGOT PASSWORD ---
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) return;
    setIsSubmitting(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast({ title: "Email Sent", description: "Check your inbox (and spam) for the reset link.", className: "bg-green-100 border-green-500" });
      setResetMode(false); // Go back to login
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- EMAIL LOGIN ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await login(loginForm.email, loginForm.password);
      toast({ title: 'Login Successful!', description: 'Welcome back to Kashi!' });
      setLoginOpen(false);
    } catch (error: any) {
      toast({ title: 'Login Failed', description: "Invalid email or password", variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- EMAIL SIGNUP ---
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      toast({ title: 'Error', description: 'Passwords do not match', variant: 'destructive' });
      return;
    }
    setIsSubmitting(true);
    try {
      await signup(signupForm.name, signupForm.email, signupForm.password, signupForm.phone);
      toast({ title: 'Account Created!', description: 'Welcome to Baba Banarasi!' });
      setSignupOpen(false);
    } catch (error: any) {
      toast({ title: 'Signup Failed', description: error.message, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                <span className="text-xl md:text-2xl">🛵</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif text-lg md:text-xl font-bold text-gray-900 leading-tight">Baba Banarasi</h1>
                <p className="text-xs text-orange-600 font-medium">Solo Scooter Darshan</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</Link>
              <Link to="/locations" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Locations</Link>
              <button onClick={() => setIsContactOpen(true)} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Contact
              </button>
              
              <div className="h-6 w-px bg-gray-200 mx-2"></div>

              {/* AUTH BUTTONS */}
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200">
                    <User className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-bold text-orange-700">{user.displayName?.split(' ')[0]}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => logout()} className="text-gray-500 hover:text-red-500" title="Logout">
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  
                  {/* LOGIN DIALOG */}
                  <Dialog open={loginOpen} onOpenChange={(open) => { setLoginOpen(open); setResetMode(false); }}>
                    <DialogTrigger asChild>
                      <button className="text-gray-700 hover:text-orange-600 font-bold text-sm flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full hover:bg-orange-50 transition-all">
                        <LogIn className="w-4 h-4" /> Sign In
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif text-orange-600">
                          {resetMode ? "Reset Password" : "Welcome Back"}
                        </DialogTitle>
                        <DialogDescription>
                          {resetMode ? "Enter your email to receive a recovery link" : "Login to manage your bookings"}
                        </DialogDescription>
                      </DialogHeader>

                      {resetMode ? (
                        /* RESET PASSWORD FORM */
                        <form onSubmit={handleResetPassword} className="space-y-4 mt-2">
                          <div className="space-y-2">
                            <Label>Registered Email</Label>
                            <Input type="email" required value={resetEmail} onChange={e => setResetEmail(e.target.value)} placeholder="you@example.com" />
                          </div>
                          <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold">
                            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                          </Button>
                          <button type="button" onClick={() => setResetMode(false)} className="w-full text-center text-sm text-gray-500 hover:text-orange-600 hover:underline">
                            Back to Login
                          </button>
                        </form>
                      ) : (
                        /* LOGIN FORM */
                        <div className="space-y-4 mt-2">
                          {/* Google Button */}
                          <Button variant="outline" onClick={handleGoogleLogin} className="w-full flex gap-2 border-gray-300 hover:bg-gray-50 py-5">
                            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                            Continue with Google
                          </Button>

                          <div className="relative flex py-1 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">Or email</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                          </div>

                          <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                              <Label>Email</Label>
                              <Input type="email" required onChange={e => setLoginForm({...loginForm, email: e.target.value})} placeholder="you@example.com" />
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <Label>Password</Label>
                                <button type="button" onClick={() => setResetMode(true)} className="text-xs text-orange-600 hover:underline">
                                  Forgot password?
                                </button>
                              </div>
                              <div className="relative">
                                <Input 
                                  type={showPassword ? "text" : "password"} 
                                  required 
                                  onChange={e => setLoginForm({...loginForm, password: e.target.value})} 
                                  placeholder="••••••••"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                              </div>
                            </div>
                            <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold">
                              {isSubmitting ? 'Logging in...' : 'Login'}
                            </Button>
                          </form>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>

                  {/* SIGNUP DIALOG */}
                  <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
                    <DialogTrigger asChild>
                      <button className="text-gray-500 hover:text-orange-600 text-sm font-medium hidden lg:block">
                        Sign Up
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white">
                      <DialogHeader><DialogTitle className="text-2xl font-serif text-orange-600">Create Account</DialogTitle></DialogHeader>
                      
                      <Button variant="outline" onClick={handleGoogleLogin} className="w-full flex gap-2 border-gray-300 hover:bg-gray-50 py-5 mt-4">
                        <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        Sign up with Google
                      </Button>

                      <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">Or email</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                      </div>

                      <form onSubmit={handleSignup} className="space-y-3">
                        <Input placeholder="Full Name" required onChange={e => setSignupForm({...signupForm, name: e.target.value})} />
                        <Input placeholder="Email" type="email" required onChange={e => setSignupForm({...signupForm, email: e.target.value})} />
                        <div className="relative">
                          <Input 
                            placeholder="Password (min 6 chars)" 
                            type={showPassword ? "text" : "password"} 
                            required minLength={6} 
                            onChange={e => setSignupForm({...signupForm, password: e.target.value})} 
                          />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        <Input placeholder="Confirm Password" type="password" required onChange={e => setSignupForm({...signupForm, confirmPassword: e.target.value})} />
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 text-white font-bold">Sign Up</Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                </div>
              )}

              {/* BOOK NOW BUTTON */}
              <Link to="/book">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-bold shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all">
                  Book Now
                </Button>
              </Link>

            </nav>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-orange-100 animate-fade-in bg-white absolute left-0 right-0 shadow-xl px-4">
              <nav className="flex flex-col gap-3">
                <Link to="/" className="p-3 bg-orange-50 rounded-lg text-gray-800 font-medium">Home</Link>
                <Link to="/book" className="p-3 bg-orange-50 rounded-lg text-gray-800 font-medium">Book Now</Link>
                <button onClick={() => { setIsContactOpen(true); setIsMenuOpen(false); }} className="p-3 bg-orange-50 rounded-lg text-left text-gray-800 font-medium">Contact Us</button>
                
                <div className="h-px bg-gray-100 my-2"></div>
                
                {user ? (
                  <Button variant="destructive" onClick={() => logout()} className="w-full">Sign Out ({user.displayName})</Button>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" onClick={() => setLoginOpen(true)} className="border-orange-200 text-orange-600">Login</Button>
                    <Button onClick={() => setSignupOpen(true)} className="bg-orange-600 text-white">Sign Up</Button>
                  </div>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* CONTACT DRAWER */}
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
