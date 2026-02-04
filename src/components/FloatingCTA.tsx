import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-fade-in w-[90%] max-w-md md:w-auto">
      <Link to="/book" className="block w-full">
        <Button 
          variant="default" 
          size="lg" 
          className="w-full shadow-2xl hover:scale-105 transition-transform text-lg font-bold py-6 rounded-full border-2 border-white/20 backdrop-blur-sm bg-gradient-to-r from-orange-500 to-red-600 text-white"
        >
          🛵 Book Your 14-Point Darshan Tour
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTA;
