import { Bike, Building, Ship, Hotel, Car, MapPinned, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bike,
    title: "Solo Scooter Darshan",
    description: "Explore Varanasi on a scooter with your personal local travel assistant. Visit temples, ghats, and spiritual spots at your own pace.",
    price: "Starting ₹1,999"
  },
  {
    icon: Building,
    title: "Kashi Vishwanath Temple Darshan",
    description: "Get assistance for smooth darshan at the famous Kashi Vishwanath Temple with local guidance and VIP arrangements.",
    price: "Included in Package"
  },
  {
    icon: Ship,
    title: "Boat Ride on River Ganga",
    description: "Experience the spiritual boat ride on the holy Ganga river. Perfect for Ganga Aarti viewing and sunrise/sunset experiences.",
    price: "₹300 onwards"
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description: "Budget to Premium hotel options near ghats and temples. We help you find the perfect stay for your Kashi yatra.",
    price: "All Budgets"
  },
  {
    icon: Car,
    title: "Pickup & Drop",
    description: "Airport/Railway station pickup and drop service on request. Start your spiritual journey with comfort.",
    price: "On Request"
  },
  {
    icon: MapPinned,
    title: "Customized Darshan Plans",
    description: "Tailor-made itineraries based on your time, interests, and spiritual goals. We create the perfect darshan plan for you.",
    price: "Customizable"
  }
];

const Services = () => {
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
            From scooter darshan to hotel booking - we handle everything for your spiritual journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-saffron flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-primary font-bold">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom package? Contact us for personalized plans!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/917991301043?text=Hi%20Baba%20Banarasi%2C%20I%20want%20to%20know%20about%20your%20services" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="w-5 h-5" />
                Enquire on WhatsApp
              </Button>
            </a>
            <a href="tel:+917991301043">
              <Button variant="call" size="lg">
                <Phone className="w-5 h-5" />
                Call: 7991301043
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
