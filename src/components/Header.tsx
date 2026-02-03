import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import ContactDrawer from "./ContactDrawer"; // Make sure ContactDrawer.tsx exists!

// --- FIREBASE CONFIG ---
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
  const [isContactOpen, setIsContactOpen] = useState(false); // Contact Drawer State
  const [user, setUser] = useState<any>(null); // Auth State

  // Check login status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <>
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
              
              {/* CONTACT DRAWER TRIGGER */}
              <button 
                onClick={() => setIsContactOpen(true)}
                className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
              >
                Contact
              </button>
              
              <div className="h-4 w-px bg-border mx-2"></div>

              {/* AUTH LOGIC */}
              {user ? (
                // LOGGED IN: Show Name + Logout
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 cursor-default">
                    Hi, {user.displayName ? user.displayName.split(' ')[0] : 'User'} 👋
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                // NOT LOGGED IN: Show Sign In
                <a 
                  href="/dashboard/login.html" 
                  className="flex items-center gap-2 text-foreground hover:text-primary font-bold border-2 border-primary/20 px-5 py-2 rounded-full hover:bg-primary hover:text-white transition-all text-sm"
                >
                  <User className="w-4 h-4" />
                  Sign In
                </a>
              )}

              {/* Book Button */}
              <Link to="/book">
                <Button className="bg-gradient-saffron text-white rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all">
                  Book Now
                </Button>
              </Link>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-3 ml-4">
              <a href="https://wa.me/917991301043" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="icon" className="rounded-full w-9 h-9">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </a>
            </div>

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
                <Link to="/locations" className="p-2 hover:bg-accent/10 rounded-lg">Locations</Link>
                
                {/* Mobile Contact Drawer Trigger */}
                <button 
                  onClick={() => { setIsContactOpen(true); setIsMenuOpen(false); }}
                  className="p-2 hover:bg-accent/10 rounded-lg text-left w-full font-medium"
                >
                  Contact Us
                </button>
                
                <div className="h-px bg-border my-1"></div>

                {/* Mobile Auth Logic */}
                {user ? (
                  <div className="bg-orange-50 p-4 rounded-xl text-center border border-orange-100">
                    <p className="font-bold text-orange-800 mb-2">Logged in as {user.email}</p>
                    <button onClick={handleLogout} className="text-red-600 font-bold text-sm underline">Sign Out</button>
                  </div>
                ) : (
                  <a 
                    href="/dashboard/login.html" 
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-primary text-primary font-bold"
                  >
                    <User className="w-5 h-5" />
                    Sign In
                  </a>
                )}

                <Link to="/book" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-saffron font-bold text-white">
                    Book Now
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* CONTACT DRAWER */}
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Header;
