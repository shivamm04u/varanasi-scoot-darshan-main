import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";

// --- FIREBASE CONFIG (Must match your login.html config) ---
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // Store logged-in user

  // Check login status on load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user if logged in, null if not
    });
    return () => unsubscribe();
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload(); // Refresh page to reset UI
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-saffron flex items-center justify-center">
              <span className="text-xl md:text-2xl">🛵</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg md:text-xl font-bold text-foreground leading-tight">
                Baba Banarasi
              </h1>
              <p className="text-xs text-muted-foreground">Solo Scooter Darshan</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/locations" className="text-foreground hover:text-primary transition-colors font-medium">Locations</Link>
            <Link to="/book" className="text-foreground hover:text-primary transition-colors font-medium">Book Now</Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            
            <div className="h-4 w-px bg-border mx-2"></div>

            {/* --- SMART AUTH BUTTON --- */}
            {user ? (
              // IF LOGGED IN: Show Name + Logout
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  Hi, {user.displayName ? user.displayName.split(' ')[0] : 'User'} 👋
                </span>
                <button 
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              // IF NOT LOGGED IN: Show Sign In Button
              <a 
                href="/dashboard/login.html" 
                className="flex items-center gap-2 text-foreground hover:text-primary font-bold border-2 border-primary/20 px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-all text-sm"
              >
                <User className="w-4 h-4" />
                Sign In
              </a>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-background">
            <nav className="flex flex-col gap-4 px-2">
              <Link to="/" className="p-2 hover:bg-accent/10 rounded-lg">Home</Link>
              <Link to="/book" className="p-2 hover:bg-accent/10 rounded-lg">Book Now</Link>
              
              <div className="h-px bg-border my-1"></div>

              {user ? (
                // Mobile Logged In View
                <div className="bg-orange-50 p-4 rounded-xl text-center">
                  <p className="font-bold text-orange-800 mb-2">Logged in as {user.email}</p>
                  <button onClick={handleLogout} className="text-red-600 font-bold text-sm">Sign Out</button>
                </div>
              ) : (
                // Mobile Sign In Button
                <a 
                  href="/dashboard/login.html" 
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-primary text-primary font-bold"
                >
                  <User className="w-5 h-5" />
                  Sign In
                </a>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
