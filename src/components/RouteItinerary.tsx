import routeImage from "@/assets/route-itinerary.jpg";
import { Clock, MapPin } from "lucide-react";

const morningStops = [
  "Assi Ghat",
  "Tulsi Ghat", 
  "Durga Mata Mandir",
  "Tulsi Manas Mandir",
  "Tridev Mandir",
  "Mani Mandir",
  "Sankat Mochan",
  "BHU Vishwanath Temple"
];

const afternoonStops = [
  "Kabir Math & Kabir Chaura",
  "Bada Ganesh Darshan",
  "Kal Bhairav Temple Darshan",
  "Vishwanath Darshan",
  "Ganga Aarti"
];

const RouteItinerary = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Route Itinerary</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Darshan & Sightseeing <span className="text-primary">in Varanasi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete full-day itinerary covering 13+ sacred sites with morning and afternoon sessions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Route Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={routeImage} 
              alt="Varanasi Darshan Route Itinerary" 
              className="w-full h-auto"
            />
          </div>

          {/* Sessions */}
          <div className="space-y-8">
            {/* Morning Session */}
            <div className="bg-background p-8 rounded-3xl shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-saffron flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Morning Session</h3>
                  <p className="text-muted-foreground">8:00 AM – 12:00 PM</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {morningStops.map((stop, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-foreground font-medium">{stop}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-gold/10 rounded-xl border border-gold/20">
                <p className="text-sm text-foreground">
                  <strong>Note:</strong> 2-3 hours rest at hotel between sessions
                </p>
              </div>
            </div>

            {/* Afternoon Session */}
            <div className="bg-background p-8 rounded-3xl shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Afternoon Session</h3>
                  <p className="text-muted-foreground">2:30 PM onwards</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {afternoonStops.map((stop, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-maroon text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 9}
                    </div>
                    <span className="text-foreground font-medium">{stop}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>✨ Highlight:</strong> End your day with the divine Ganga Aarti!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteItinerary;
