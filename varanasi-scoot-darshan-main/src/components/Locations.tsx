import { MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import kashiVishwanath from "@/assets/kashi-vishwanath.jpg";
import dashashwamedhGhat from "@/assets/dashashwamedh-ghat.jpg";
import manikarnikaGhat from "@/assets/manikarnika-ghat.jpg";
import assiGhat from "@/assets/assi-ghat.jpg";
import sarnath from "@/assets/sarnath.jpg";

const locations = [
  {
    name: "Kashi Vishwanath Temple",
    image: kashiVishwanath,
    description: "The holiest Shiva temple in Varanasi, one of the 12 Jyotirlingas. A must-visit for every pilgrim.",
    duration: "1-2 hours",
    rating: 5.0,
    coordinates: { lat: 25.3107, lng: 83.0106 }
  },
  {
    name: "Dashashwamedh Ghat",
    image: dashashwamedhGhat,
    description: "Famous for the spectacular Ganga Aarti ceremony held every evening. The main ghat of Varanasi.",
    duration: "1-3 hours",
    rating: 4.9,
    coordinates: { lat: 25.3042, lng: 83.0109 }
  },
  {
    name: "Manikarnika Ghat",
    image: manikarnikaGhat,
    description: "The sacred cremation ghat where moksha is believed to be attained. A profound spiritual experience.",
    duration: "30 min - 1 hour",
    rating: 4.8,
    coordinates: { lat: 25.3089, lng: 83.0114 }
  },
  {
    name: "Assi Ghat",
    image: assiGhat,
    description: "Where the Assi river meets the Ganges. Popular for morning yoga, meditation and peaceful walks.",
    duration: "1-2 hours",
    rating: 4.7,
    coordinates: { lat: 25.2833, lng: 83.0000 }
  },
  {
    name: "Sarnath",
    image: sarnath,
    description: "Where Buddha gave his first sermon. Ancient Buddhist site with Dhamek Stupa and museum.",
    duration: "2-3 hours",
    rating: 4.8,
    coordinates: { lat: 25.3814, lng: 83.0225 }
  }
];

const Locations = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Sacred Destinations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore{" "}
            <span className="gradient-text">Holy Varanasi</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Visit the most sacred sites in Kashi with our GPS-guided solo scooter tours. 
            Each location is rich with spiritual significance and ancient history.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="card-location group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-semibold">{location.rating}</span>
                </div>

                {/* Location Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl font-bold text-primary-foreground">
                    {location.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {location.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{location.duration}</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    View Map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/book">
            <Button variant="saffron" size="xl">
              Book Your Darshan Tour
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Locations;
