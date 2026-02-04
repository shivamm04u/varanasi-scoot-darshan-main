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
import { Checkbox } from "@/components/ui/checkbox"; // Make sure you have this component or use standard input
import { useToast } from '@/hooks/use-toast';
import { User, LogOut, LogIn, Menu, X, Eye, EyeOff } from 'lucide-react';
import ContactDrawer from "./ContactDrawer";
import { getAuth, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase Config
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
  const [authOpen, setAuthOpen] = useState(false); // Controls Modal Open/Close
  
  // Logic States
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [resetMode, setResetMode] = useState(false);

  // Forms
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', phone: '' });
  const [resetEmail, setResetEmail] = useState('');

  // Handlers
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast({ title: "Success!", description: "Logged in with Google" });
      setAuthOpen(false);
    } catch (error: any) {
      toast({ title: "Google Login Failed", description: "Please try again.", variant: "destructive" });
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) return;
    setIsSubmitting(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast({ title: "Email Sent", description: "Check your inbox for reset link.", className: "bg-green-100" });
      setResetMode(false);
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (activeTab === 'login') {
        await login(formData.email, formData.password);
        toast({ title: 'Welcome Back!', description: 'Login successful.' });
      } else {
        if (formData.password !== formData.confirmPassword) throw new Error("Passwords do not match");
        await signup(formData.name, formData.email, formData.password, formData.phone);
        toast({ title: 'Account Created!', description: 'Welcome to Baba Banarasi!' });
      }
      setAuthOpen(false);
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                <span className="text-xl">🛵</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-serif text-lg font-bold text-gray-900">Baba Banarasi</h1>
                <p className="text-xs text-orange-600 font-medium">Solo Scooter Darshan</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
              <Link to="/locations" className="text-gray-700 hover:text-orange-600 font-medium">Locations</Link>
              <button onClick={() => setIsContactOpen(true)} className="text-gray-700 hover:text-orange-600 font-medium">Contact</button>
              
              <div className="h-6 w-px bg-gray-200 mx-2"></div>

              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    Hi, {user.displayName?.split(' ')[0]}
                  </span>
                  <Button variant="ghost" size="sm" onClick={() => logout()} className="text-gray-500 hover:text-red-500">
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Dialog open={authOpen} onOpenChange={setAuthOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 rounded-full">
                        <LogIn className="w-4 h-4 mr-2" /> Sign In
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="sm:max-w-[400px] bg-white p-0 overflow-hidden border-0 shadow-2xl rounded-2xl">
                      
                      {/* HEADER */}
                      <div className="p-6 pb-4 bg-gray-50/50 border-b border-gray-100">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-serif text-center text-gray-900 mb-1">
                            {resetMode ? "Reset Password" : "Welcome Back"}
                          </DialogTitle>
                          <DialogDescription className="text-center text-gray-500">
                            {resetMode ? "Enter your email to receive a link" : "Enter your credentials to access your account"}
                          </DialogDescription>
                        </DialogHeader>

                        {!resetMode && (
                          <div className="flex bg-gray-100 p-1 rounded-lg mt-6">
                            <button 
                              onClick={() => setActiveTab('login')}
                              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'login' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                              Login
                            </button>
                            <button 
                              onClick={() => setActiveTab('signup')}
                              className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'signup' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                              Sign Up
                            </button>
                          </div>
                        )}
                      </div>

                      {/* BODY */}
                      <div className="p-6 pt-4">
                        {resetMode ? (
                          <form onSubmit={handleResetPassword} className="space-y-4">
                            <Input type="email" placeholder="name@example.com" value={resetEmail} onChange={e => setResetEmail(e.target.value)} required />
                            <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 text-white font-bold h-11">
                              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                            </Button>
                            <button type="button" onClick={() => setResetMode(false)} className="w-full text-center text-sm text-gray-500 hover:text-orange-600">Back to Login</button>
                          </form>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-4">
                            
                            {activeTab === 'signup' && (
                              <div className="space-y-2">
                                <Label>Full Name</Label>
                                <Input placeholder="John Doe" required onChange={e => setFormData({...formData, name: e.target.value})} />
                              </div>
                            )}

                            <div className="space-y-2">
                              <Label>Email</Label>
                              <Input type="email" placeholder="name@example.com" required onChange={e => setFormData({...formData, email: e.target.value})} />
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <Label>Password</Label>
                                {activeTab === 'login' && (
                                  <button type="button" onClick={() => setResetMode(true)} className="text-xs text-orange-600 hover:underline font-medium">Forgot password?</button>
                                )}
                              </div>
                              <div className="relative">
                                <Input type={showPassword ? "text" : "password"} placeholder="••••••••" required onChange={e => setFormData({...formData, password: e.target.value})} />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                              </div>
                            </div>

                            {activeTab === 'signup' && (
                              <div className="space-y-2">
                                <Label>Confirm Password</Label>
                                <Input type="password" placeholder="••••••••" required onChange={e => setFormData({...formData, confirmPassword: e.target.value})} />
                              </div>
                            )}

                            {activeTab === 'login' && (
                              <div className="flex items-center space-x-2">
                                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                                <label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600">Remember me</label>
                              </div>
                            )}

                            <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-11 shadow-md hover:shadow-lg transition-all">
                              {isSubmitting ? 'Processing...' : (activeTab === 'login' ? 'Login' : 'Create Account')}
                            </Button>

                            <div className="relative flex py-2 items-center">
                              <div className="flex-grow border-t border-gray-200"></div>
                              <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase font-bold tracking-wider">Or continue with</span>
                              <div className="flex-grow border-t border-gray-200"></div>
                            </div>

                            <Button type="button" variant="outline" onClick={handleGoogleLogin} className="w-full flex gap-2 border-gray-300 hover:bg-gray-50 h-11 font-medium text-gray-700">
                              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                              Google
                            </Button>

                          </form>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Link to="/book">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-bold shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all">
                      Book Now
                    </Button>
                  </Link>
                </div>
              )}
            </nav>

            <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-orange-100 animate-fade-in bg-white absolute left-0 right-0 shadow-xl px-4">
              <nav className="flex flex-col gap-3">
                <Link to="/" className="p-3 bg-orange-50 rounded-lg text-gray-800 font-medium">Home</Link>
                <Link to="/book" className="p-3 bg-orange-50 rounded-lg text-gray-800 font-medium">Book Now</Link>
                <button onClick={() => { setIsContactOpen(true); setIsMenuOpen(false); }} className="p-3 bg-orange-50 rounded-lg text-left text-gray-800 font-medium">Contact Us</button>
                
                <div className="h-px bg-gray-100 my-2"></div>
                
                {!user && (
                  <Button variant="outline" onClick={() => { setAuthOpen(true); setIsMenuOpen(false); }} className="w-full border-orange-200 text-orange-600">
                    Sign In / Sign Up
                  </Button>
                )}
                {user && (
                  <Button variant="destructive" onClick={() => logout()} className="w-full">Sign Out</Button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
