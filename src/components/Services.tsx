import { Bike, Building, Ship, Hotel, Car, MapPinned, Phone, MessageCircle, Sun, Sunset } from "lucide-react";
import { Button } from "@/components/ui/button";

// NEW: Props interface
interface ServicesProps {
  scooterPrice?: string;
  boatPrice?: string;
}

const Services = ({ scooterPrice, boatPrice }: ServicesProps) => {
  // Itinerary Arrays (kept static for now)
  const morningItinerary = [ "Assi Ghat", "Tulsi Ghat", "Durga Mata Mandir", "Tulsi Manas Mandir", "Tridev Mandir", "Mani Mandir", "Sankat Mochan", "BHU Vishwanath" ];
  const afternoonItinerary = [ "Kabir Math", "Bada Ganesh", "Kal Bhairav", "Kashi Vishwanath", "Ganga Aarti" ,"Sarnath Temple" ];

  const services = [
    {
      icon: Bike,
      title: "Solo Scooter Darshan",
      description: "Explore Varanasi on a scooter with your personal local travel assistant.",
      price: `Starting ₹${scooterPrice || "999"}` // DYNAMIC
    },
    {
      icon: Building,
      title: "Kashi Vishwanath Temple",
      description: "Get assistance for smooth darshan with local guidance.",
      price: "Included"
    },
    {
      icon: Ship,
      title: "Boat Ride on Ganga",
      description: "Experience the spiritual boat ride on the holy Ganga river.",
      price: `₹${boatPrice || "300"} onwards` // DYNAMIC
    },
    { icon: Hotel, title: "Hotel Booking", description: "Budget to Premium hotel options.", price: "All Budgets" },
    { icon: Car, title: "Pickup & Drop", description: "Airport/Railway station pickup.", price: "On Request" },
    { icon: MapPinned, title: "Customized Plans", description: "Tailor-made itineraries.", price: "Customizable" }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <MapPinned className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Our Services</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete <span className="text-primary">Varanasi Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From scooter darshan to hotel booking - we handle everything
          </p>
        </div>

        {/* 13-Point Itinerary (Your Original Design) */}
        <div className="bg-background p-8 md:p-12 rounded-3xl shadow-lg border border-border mb-16">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Full Day Darshan - <span className="text-primary">13 Sacred Points</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-saffron flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary-foreground" />
                </div>
                <div><h4 className="font-serif text-xl font-bold">Morning Session</h4><p className="text-sm text-muted-foreground">Assi Ghat to BHU</p></div>
              </div>
              <ol className="space-y-3">{morningItinerary.map((place, i) => <li key={i} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">{i+1}</span><span>{place}</span></li>)}</ol>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-sunset flex items-center justify-center">
                  <Sunset className="w-6 h-6 text-primary-foreground" />
                </div>
                <div><h4 className="font-serif text-xl font-bold">Afternoon Session</h4><p className="text-sm text-muted-foreground">Kabir Math to Ganga Aarti</p></div>
              </div>
              <ol className="space-y-3">{afternoonItinerary.map((place, i) => <li key={i} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-sm">{i+9}</span><span>{place}</span></li>)}</ol>
            </div>
          </div>
        </div>

        {/* Services Grid (Dynamic Prices) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-background p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-saffron flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-primary font-bold">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">Need a custom package? Contact us!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/917991301043" target="_blank" rel="noopener noreferrer"><Button variant="whatsapp" size="lg"><MessageCircle className="w-5 h-5" /> Enquire on WhatsApp</Button></a>
            <a href="tel:+917991301043"><Button variant="call" size="lg"><Phone className="w-5 h-5" /> Call: 7991301043</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
