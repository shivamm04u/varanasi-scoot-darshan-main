import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Baba Banarasi" 
            className="h-12 w-12 object-contain group-hover:scale-110 transition-transform"
          />
          <div className="flex flex-col">
            <span className={`text-2xl font-serif font-bold leading-none ${scrolled ? 'text-orange-600' : 'text-white'}`}>
              Baba Banarasi
            </span>
            <span className={`text-xs font-medium tracking-wider ${scrolled ? 'text-gray-600' : 'text-orange-100'}`}>
              SCOOT DARSHAN
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Tours', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className={`font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* AUTH BUTTONS (Linked to your login.html) */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/login.html" 
            className={`px-5 py-2 rounded-full border-2 font-bold transition-all flex items-center gap-2
              ${scrolled 
                ? 'border-orange-600 text-orange-600 hover:bg-orange-50' 
                : 'border-white text-white hover:bg-white hover:text-orange-600'
              }`}
          >
            <User size={18} />
            Sign In
          </a>
          
          <Link 
            to="/book" 
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-orange-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-gray-800' : 'text-white'} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-orange-100 py-4 px-6 flex flex-col gap-4">
          {['Home', 'Tours', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-gray-800 font-medium hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <hr className="border-gray-100" />
          
          {/* Mobile Login Link */}
          <a 
            href="/login.html"
            className="text-center w-full py-3 rounded-lg border border-orange-600 text-orange-600 font-bold"
          >
            Sign In
          </a>
          
          <Link 
            to="/book"
            className="text-center w-full py-3 rounded-lg bg-orange-600 text-white font-bold"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
