import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-varanasi.jpg";
import { Phone, MessageCircle, MapPin, Clock, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary-foreground text-sm font-medium">Only in Varanasi, Kashi</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Baba Banarasi
          </h1>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Solo Scooter Darshan
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-4 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Tired of walking long distances? Auto-rickshaw expensive? Now explore Banaras 
            the smart, budget-friendly & truly local way on a scooter with your personal travel assistant.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl text-gold font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.35s' }}>
            Starting from just ₹1,999 only!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/book">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                🛵 Book Solo Darshan Now
              </Button>
            </Link>
            <div className="flex gap-3">
              <a href="https://wa.me/917991301043?text=Hi%20Baba%20Banarasi%2C%20I%20want%20to%20book%20Solo%20Scooter%20Darshan" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+917991301043">
                <Button variant="call" size="lg">
                  <Phone className="w-5 h-5" />
                  7991301043
                </Button>
              </a>
            </div>
          </div>

          {/* Features Strip */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-primary-foreground/80 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">2-8 Hour Tours</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">25+ Sacred Sites</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">GPS Guided</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
