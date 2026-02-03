import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/locations" className="text-foreground hover:text-primary transition-colors font-medium">
              Locations
            </Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            
            {/* Divider */}
            <div className="h-4 w-px bg-border mx-2"></div>

            {/* --- SIGN IN BUTTON (Links to your login.html) --- */}
            <a 
              href="/login.html" 
              className="flex items-center gap-2 text-foreground hover:text-primary font-medium border border-primary/50 px-4 py-1.5 rounded-full hover:bg-primary/5 transition-all text-sm"
            >
              <User className="w-4 h-4" />
              Sign In
            </a>

            {/* --- SIGN UP / BOOK BUTTON --- */}
            <Link to="/book">
              <Button className="bg-gradient-saffron text-white rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all">
                Sign Up / Book
              </Button>
            </Link>
          </nav>

          {/* Desktop Contact Icons (Right side) */}
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-background">
            <nav className="flex flex-col gap-4 px-2">
              <Link to="/" className="p-2 hover:bg-accent/10 rounded-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/locations" className="p-2 hover:bg-accent/10 rounded-lg" onClick={() => setIsMenuOpen(false)}>Locations</Link>
              <a href="#contact" className="p-2 hover:bg-accent/10 rounded-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
              
              <div className="h-px bg-border my-1"></div>

              {/* Mobile Sign In */}
              <a 
                href="/login.html" 
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-primary text-primary font-bold"
              >
                <User className="w-5 h-5" />
                Sign In / Admin
              </a>

              {/* Mobile Sign Up */}
              <Link to="/book" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-saffron font-bold text-white">
                  Sign Up & Book Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
