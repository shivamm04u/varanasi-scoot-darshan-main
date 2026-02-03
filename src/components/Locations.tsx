import { MapPin, Navigation } from "lucide-react"; // Added Navigation Icon
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Image Imports
import kashiImg from "@/assets/locations/kashi-vishwanath.jpg";
import gangaImg from "@/assets/locations/dashashwamedh.jpg";
import bhuImg from "@/assets/locations/bhu.jpg";
import assiImg from "@/assets/locations/assi-ghat.jpg";
import sarnathImg from "@/assets/locations/sarnath.jpg";
// Fallback if local image missing
const sarnathImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Dhamekh_Stupa_Sarnath.jpg/800px-Dhamekh_Stupa_Sarnath.jpg";

const locations = [
  {
    id: 1,
    name: "Kashi Vishwanath Temple",
    description: "One of the most famous Hindu temples dedicated to Lord Shiva. A must-visit spiritual center.",
    image: kashiImg,
    tag: "Spiritual Heart",
    mapLink: "https://goo.gl/maps/KashiVishwanath"
  },
  {
    id: 2,
    name: "Dashashwamedh Ghat",
    description: "Experience the world-famous Ganga Aarti every evening. The most vibrant ghat in Varanasi.",
    image: gangaImg,
    tag: "Ganga Aarti",
    mapLink: "https://goo.gl/maps/Dashashwamedh"
  },
  {
    id: 3,
    name: "Sarnath Temple",
    description: "The holy site where Lord Buddha gave his first sermon. Witness the Dhamek Stupa.",
    image: sarnathImg,
    tag: "Buddhist Heritage",
    mapLink: "https://goo.gl/maps/Sarnath"
  },
  {
    id: 4,
    name: "Assi Ghat",
    description: "A peaceful ghat where pilgrims pay homage to Lord Shiva. Famous for Morning Aarti.",
    image: assiImg,
    tag: "Morning Vibes",
    mapLink: "https://goo.gl/maps/AssiGhat"
  },
  {
    id: 5,
    name: "BHU & New Vishwanath",
    description: "Asia's largest residential university campus with the magnificent New Vishwanath Temple.",
    image: bhuImg,
    tag: "Architecture",
    mapLink: "https://goo.gl/maps/BHU"
  }
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Sacred Destinations</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Holy <span className="text-primary">Varanasi</span>
          </h2>
          {/* UPDATED TEXT: 13 -> 14 */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit all 14 sacred sites in Kashi with our guided solo scooter tours. Each location is rich with spiritual significance and ancient history.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="group rounded-3xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              
              {/* IMAGE SECTION */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                  {location.tag}
                </div>
                
                {/* NEW: GOOGLE MAPS ICON (Bottom Right of Image) */}
                <a 
                  href={location.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-20 bg-white/90 p-2 rounded-full shadow-lg hover:scale-110 transition-transform hover:bg-white text-primary"
                  title="View on Google Maps"
                >
                  <Navigation className="w-5 h-5" />
                </a>

                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                <h3 className="absolute bottom-4 left-6 text-2xl font-serif font-bold text-white max-w-[70%]">
                  {location.name}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {location.description}
                </p>
                <Link to="/book">
                  <Button className="w-full bg-secondary text-white hover:bg-primary transition-colors">
                    Visit Here 🛵
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Locations;
