import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '@/AuthContext'; // Updated path
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
import { User, LogOut, LogIn, UserPlus, Menu, X, Phone, MessageCircle } from 'lucide-react';
import ContactDrawer from "./ContactDrawer";

export default function Header() {
  const { user, login, signup, logout } = useAuth();
  const { toast } = useToast();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '', phone: '' });

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
              
              {/* Contact Button */}
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
                  <Button variant="ghost" size="sm" onClick={() => logout()} className="text-gray-500 hover:text-red-500">
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex gap-3 items-center">
                  
                  {/* LOGIN POPUP */}
                  <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
                    <DialogTrigger asChild>
                      <button className="text-gray-700 hover:text-orange-600 font-bold text-sm flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full hover:bg-orange-50 transition-all">
                        <LogIn className="w-4 h-4" /> Sign In
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif text-orange-600">Welcome Back</DialogTitle>
                        <DialogDescription>Login to manage your bookings</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleLogin} className="space-y-4 mt-4">
                        <div className="space-y-2"><Label>Email</Label><Input type="email" required onChange={e => setLoginForm({...loginForm, email: e.target.value})} /></div>
                        <div className="space-y-2"><Label>Password</Label><Input type="password" required onChange={e => setLoginForm({...loginForm, password: e.target.value})} /></div>
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold">{isSubmitting ? 'Logging in...' : 'Login'}</Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  {/* SIGNUP POPUP (Hidden on small screens if needed, but kept here) */}
                  <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
                    <DialogTrigger asChild>
                      <button className="text-gray-500 hover:text-orange-600 text-sm font-medium hidden lg:block">
                        Sign Up
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white">
                      {/* Signup Form Code... */}
                      <DialogHeader><DialogTitle>Create Account</DialogTitle></DialogHeader>
                      <form onSubmit={handleSignup} className="space-y-4 mt-4">
                        <Input placeholder="Full Name" required onChange={e => setSignupForm({...signupForm, name: e.target.value})} />
                        <Input placeholder="Email" type="email" required onChange={e => setSignupForm({...signupForm, email: e.target.value})} />
                        <Input placeholder="Phone" type="tel" onChange={e => setSignupForm({...signupForm, phone: e.target.value})} />
                        <Input placeholder="Password" type="password" required onChange={e => setSignupForm({...signupForm, password: e.target.value})} />
                        <Input placeholder="Confirm Password" type="password" required onChange={e => setSignupForm({...signupForm, confirmPassword: e.target.value})} />
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 text-white">Sign Up</Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                </div>
              )}

              {/* ✅ THE BOOK NOW BUTTON IS BACK HERE */}
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
