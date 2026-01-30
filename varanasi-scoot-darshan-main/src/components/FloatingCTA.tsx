import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-fade-in">
          {/* WhatsApp */}
          <a
            href="https://wa.me/917991301043?text=Hi%20Baba%20Banarasi%2C%20I%20want%20to%20book%20Solo%20Scooter%20Darshan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[hsl(142,70%,45%)] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp Now</span>
          </a>

          {/* Call */}
          <a
            href="tel:+917991301043"
            className="flex items-center gap-3 bg-accent text-accent-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">Call: 7991301043</span>
          </a>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all hover:scale-110 ${
          isExpanded 
            ? "bg-foreground text-background" 
            : "bg-[hsl(142,70%,45%)] text-white animate-pulse"
        }`}
      >
        {isExpanded ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>

      {/* Tooltip when not expanded */}
      {!isExpanded && (
        <div className="absolute bottom-20 right-0 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg animate-bounce">
          Book on WhatsApp! 📱
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;
