import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X, User, LogIn } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-saffron flex items-center justify-center shadow-md">
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
          <nav className="hidden xl:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/locations" className="text-foreground hover:text-primary transition-colors font-medium">
              Locations
            </Link>
            <Link to="/book" className="text-foreground hover:text-primary transition-colors font-medium">
              Packages
            </Link>
          </nav>

          {/* Desktop Actions (Auth + Contact) */}
          <div className="hidden md:flex items-center gap-3">
            {/* SIGN IN BUTTON - Links to login.html */}
            <a 
              href="/login.html" 
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary text-primary font-bold hover:bg-orange-50 transition-all text-sm"
            >
              <User className="w-4 h-4" />
              Sign In
            </a>

            {/* BOOK NOW / SIGN UP */}
            <Link to="/book">
              <Button className="bg-gradient-saffron text-white rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all">
                Book Now
              </Button>
            </Link>

            <div className="h-6 w-px bg-border mx-1"></div>

            {/* Whatsapp */}
            <a href="https://wa.me/917991301043?text=Hi%20Baba%20Banarasi" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="icon" className="rounded-full w-9 h-9">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background animate-fade-in absolute left-0 right-0 px-4 shadow-xl">
            <nav className="flex flex-col gap-3">
              <Link to="/" className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/book" className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent/10" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
              
              <hr className="border-border my-1" />

              {/* Mobile Sign In */}
              <a 
                href="/login.html" 
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-primary text-primary font-bold"
              >
                <User className="w-5 h-5" />
                Sign In / Admin
              </a>

              {/* Mobile Contact */}
              <div className="flex gap-3 mt-2">
                <a href="https://wa.me/917991301043" target="_blank" className="flex-1">
                  <Button variant="whatsapp" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </Button>
                </a>
                <a href="tel:+917991301043" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" /> Call
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
