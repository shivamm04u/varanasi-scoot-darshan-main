import { Footprints, Clock, Route, MapPin, Shield, Wallet, Camera, AlertTriangle, Heart } from "lucide-react";

const reasons = [
  {
    icon: Footprints,
    title: "No Walking Fatigue",
    description: "You sit comfortably at the back while the scooter is driven by an expert local travel assistant"
  },
  {
    icon: Clock,
    title: "Saves Time & Energy",
    description: "Cover more temples and ghats in less time. No waiting for autos or walking long distances"
  },
  {
    icon: Route,
    title: "Easy Travel Through Narrow Lanes",
    description: "Scooters navigate easily through Varanasi's crowded and narrow galis that cars can't reach"
  },
  {
    icon: MapPin,
    title: "Local Guide Experience",
    description: "Your driver is a local who knows the culture, history, and spiritual importance of every spot"
  },
  {
    icon: Shield,
    title: "100% Safe for Solo Travelers",
    description: "Perfect for solo yatris, women travelers, and first-time visitors to Kashi"
  },
  {
    icon: Wallet,
    title: "Budget-Friendly & Transparent",
    description: "No hidden charges, no bargaining needed. Clear pricing from ₹1,999 only"
  },
  {
    icon: Camera,
    title: "Photo & Video Assistance",
    description: "Help in taking your photos and videos during the trip for memories that last forever"
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Baba Banarasi</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solo Scooter Darshan - Don't just see Banaras, feel it!
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-cream p-6 rounded-2xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-saffron flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* The Biggest Reason - Highlighted Box */}
        <div className="bg-gradient-to-r from-maroon to-maroon-dark text-primary-foreground p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-gold" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                ⭐ The Biggest Reason
              </h3>
              <p className="text-lg md:text-xl mb-4 opacity-90">
                <strong>Auto-rickshaw drivers often charge tourists ₹2,500 - ₹3,000</strong> for local sightseeing.
              </p>
              <p className="text-lg md:text-xl">
                <span className="text-gold font-bold">❤️ With Baba Banarasi,</span> you get the same or an even better experience at a much lower cost – 
                <strong> no bargaining, no hidden charges!</strong>
              </p>
            </div>
          </div>
          
          {/* Price Tag */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-primary-foreground/20 backdrop-blur-sm px-8 py-4 rounded-2xl text-center">
              <div className="text-sm opacity-80">Starting from just</div>
              <div className="text-4xl font-bold text-gold">₹1,999</div>
              <div className="text-sm opacity-80">Full Day Darshan</div>
            </div>
            <div className="bg-primary-foreground/20 backdrop-blur-sm px-8 py-4 rounded-2xl text-center">
              <div className="text-sm opacity-80">Perfect for</div>
              <div className="text-xl font-bold">Foreign Tourists, Vloggers</div>
              <div className="text-sm opacity-80">Influencers & First-time Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
