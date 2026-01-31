import { Bike, Building, Ship, Hotel, Car, MapPinned, Phone, MessageCircle, Sun, Sunset } from "lucide-react";
import { Button } from "@/components/ui/button";

const morningItinerary = [
  "Assi Ghat",
  "Tulsi Ghat", 
  "Durga Mata Mandir (Monkey Temple)",
  "Tulsi Manas Mandir",
  "Tridev Mandir",
  "Mani Mandir (BHU)",
  "Sankat Mochan (Hanuman)",
  "BHU Vishwanath Temple"
];

const afternoonItinerary = [
  "Kabir Math",
  "Bada Ganesh",
  "Kal Bhairav (Guardian of Kashi)",
  "Kashi Vishwanath (Golden Temple)",
  "Ganga Aarti (Dashashwamedh Ghat)"
];

const services = [
  {
    icon: Bike,
    title: "Solo Scooter Darshan",
    description: "Explore Varanasi on a scooter with your personal local travel assistant. Visit temples, ghats, and spiritual spots at your own pace.",
    price: "Starting ₹999"
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

        {/* 13-Point Itinerary */}
        <div className="bg-background p-8 md:p-12 rounded-3xl shadow-lg border border-border mb-16">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Full Day Darshan - <span className="text-primary">13 Sacred Points</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Morning Section */}
            <div className="bg-secondary/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-saffron flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground">Morning Session</h4>
                  <p className="text-sm text-muted-foreground">Assi Ghat to BHU</p>
                </div>
              </div>
              <ol className="space-y-3">
                {morningItinerary.map((place, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{place}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Afternoon Section */}
            <div className="bg-secondary/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-sunset flex items-center justify-center">
                  <Sunset className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-foreground">Afternoon Session</h4>
                  <p className="text-sm text-muted-foreground">Kabir Math to Ganga Aarti</p>
                </div>
              </div>
              <ol className="space-y-3">
                {afternoonItinerary.map((place, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
                      {index + 9}
                    </span>
                    <span className="text-foreground">{place}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
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
