import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* CTA Section */}
      <div className="bg-gradient-saffron py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Solo Darshan?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book now and experience the spiritual journey of Varanasi at your own pace. 
            We're just a call or message away!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/917991301043?text=Hi%20Baba%20Banarasi%2C%20I%20want%20to%20book%20Solo%20Scooter%20Darshan" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl">
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </Button>
            </a>
            <a href="tel:+917991301043">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-5 h-5" />
                Call: 7991301043
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl">🛵</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">Baba Banarasi</h3>
                  <p className="text-sm opacity-70">Solo Scooter Darshan</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 mb-6">
                Experience the sacred city of Varanasi on your own electric scooter. 
                Solo pilgrimage tours designed for the modern devotee.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-primary-foreground/70 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/book" className="text-primary-foreground/70 hover:text-primary transition-colors">
                    Book Now
                  </Link>
                </li>
                <li>
                  <a href="#locations" className="text-primary-foreground/70 hover:text-primary transition-colors">
                    Sacred Locations
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-primary-foreground/70 hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6">Popular Routes</h4>
              <ul className="space-y-3">
                <li className="text-primary-foreground/70 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Kashi Vishwanath Temple
                </li>
                <li className="text-primary-foreground/70 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Dashashwamedh Ghat
                </li>
                <li className="text-primary-foreground/70 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Manikarnika Ghat
                </li>
                <li className="text-primary-foreground/70 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Sarnath
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+917991301043" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                    +91 79913 01043
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/917991301043?text=Hi%20Baba%20Banarasi%2C%20I%20want%20to%20book%20Solo%20Scooter%20Darshan" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    WhatsApp Us
                  </a>
                </li>
                <li>
                  <a href="mailto:info@bababanarasi.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                    info@bababanarasi.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <span>Near Dashashwamedh Ghat,<br />Varanasi, UP 221001</span>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  Open 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10 py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left">
            © 2025 Baba Banarasi Solo Scooter Darshan. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Made with 🙏 in Varanasi, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
