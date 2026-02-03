import { X, Phone, MessageCircle, MapPin, Mail, Send, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDrawer = ({ isOpen, onClose }: ContactDrawerProps) => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp Logic
    const msg = `Hi Baba Banarasi, my name is ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/917991301043?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Slide-Over Panel */}
      <div className="fixed inset-y-0 right-0 z-[100] w-full md:w-[500px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out animate-in slide-in-from-right border-l border-orange-100 flex flex-col h-full">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-orange-50 to-white flex-shrink-0">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900">Get in Touch</h2>
            <p className="text-sm text-gray-500">We are here to help you 24/7</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100 text-gray-500 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          
          {/* Quick Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-orange-50/50 border border-orange-100 hover:border-orange-300 transition-all group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Us</p>
                <a href="tel:+917991301043" className="text-lg font-bold text-gray-900 hover:text-primary transition-colors">
                  +91 79913 01043
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50/50 border border-green-100 hover:border-green-300 transition-all group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">WhatsApp</p>
                <a href="https://wa.me/917991301043" target="_blank" className="text-lg font-bold text-gray-900 hover:text-green-600 transition-colors">
                  Chat Now
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100 hover:border-blue-300 transition-all group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Location</p>
                <a href="https://goo.gl/maps/AssiGhat" target="_blank" className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors">
                  Assi Ghat, Varanasi
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 py-4 border-t border-b border-gray-100">
            <a href="#" className="p-3 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-100 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-pink-50 rounded-full text-pink-600 hover:bg-pink-100 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-3 bg-red-50 rounded-full text-red-600 hover:bg-red-100 transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" /> Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Enter name"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="+91..."
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">How can we help?</label>
                <textarea 
                  rows={4} 
                  required
                  className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="I want to know about Sunrise Tour..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button className="w-full py-6 text-lg font-bold bg-gradient-to-r from-primary to-orange-600 hover:shadow-lg transition-all">
                <Send className="w-5 h-5 mr-2" /> Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactDrawer;
