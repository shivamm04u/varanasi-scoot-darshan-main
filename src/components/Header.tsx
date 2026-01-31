import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/locations" className="text-foreground hover:text-primary transition-colors font-medium">
              Locations
            </Link>
            <Link to="/book" className="text-foreground hover:text-primary transition-colors font-medium">
              Book Now
            </Link>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://wa.me/917991301043?text=Hi%20Baba%20Banarasi%2C%20I%20want%20to%20book%20Solo%20Scooter%20Darshan" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="sm">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <a href="tel:+917991301043">
              <Button variant="call" size="sm">
                <Phone className="w-4 h-4" />
                7991301043
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
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Home
              </Link>
              <Link to="/locations" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Locations
              </Link>
              <Link to="/book" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Book Now
              </Link>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Contact
              </a>
              <div className="flex gap-3 pt-4">
                <a href="https://wa.me/917991301043?text=Hi%20Baba%20Banarasi%2C%20I%20want%20to%20book%20Solo%20Scooter%20Darshan" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="whatsapp" size="sm" className="w-full">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </a>
                <a href="tel:+917991301043" className="flex-1">
                  <Button variant="call" size="sm" className="w-full">
                    <Phone className="w-4 h-4" />
                    7991301043
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
