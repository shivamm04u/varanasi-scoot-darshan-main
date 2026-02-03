import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Correct Image Imports
import kashiImg from "@/assets/locations/kashi-vishwanath.jpg";
import gangaImg from "@/assets/locations/dashashwamedh.jpg";
import manikarnikaImg from "@/assets/locations/manikarnika.jpg";
import assiImg from "@/assets/locations/assi-ghat.jpg";
import tulsiImg from "@/assets/locations/tulsi-ghat.jpg";
import durgaImg from "@/assets/locations/durga-mandir.jpg";
import tulsiManasImg from "@/assets/locations/tulsi-manas.jpg";
import tridevImg from "@/assets/locations/tridev-mandir.jpg";
import maniImg from "@/assets/locations/mani-mandir.jpg";
import sankatImg from "@/assets/locations/sankat-mochan.jpg";
import bhuImg from "@/assets/locations/bhu.jpg";
import kabirImg from "@/assets/locations/kabir-math.jpg";
import ganeshImg from "@/assets/locations/bada-ganesh.jpg";
import sarnathImg from "@/assets/locations/sarnath.jpg";

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
    name: "Manikarnika Ghat",
    description: "The Mahashmashana where life meets death. A powerful place for spiritual realization.",
    image: manikarnikaImg,
    tag: "Moksha",
    mapLink: "https://goo.gl/maps/Manikarnika"
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
    name: "Tulsi Ghat",
    description: "Associated with poet Tulsidas who wrote Ramcharitmanas here.",
    image: tulsiImg,
    tag: "History",
    mapLink: "https://goo.gl/maps/TulsiGhat"
  },
  {
    id: 6,
    name: "Durga Mandir",
    description: "Ancient temple dedicated to Goddess Durga, known for its red color and monkey inhabitants.",
    image: durgaImg,
    tag: "Shakti Peeth",
    mapLink: "https://goo.gl/maps/DurgaMandir"
  },
  {
    id: 7,
    name: "Tulsi Manas Mandir",
    description: "Modern marble temple with verses of Ramcharitmanas inscribed on walls.",
    image: tulsiManasImg,
    tag: "Ramayana",
    mapLink: "https://goo.gl/maps/TulsiManas"
  },
  {
    id: 8,
    name: "Tridev Mandir",
    description: "Beautiful temple dedicated to Brahma, Vishnu, and Mahesh.",
    image: tridevImg,
    tag: "Divinity",
    mapLink: "https://goo.gl/maps/TridevMandir"
  },
  {
    id: 9,
    name: "Mani Mandir",
    description: "Located near BHU, a serene temple dedicated to Lord Shiva.",
    image: maniImg,
    tag: "Peace",
    mapLink: "https://goo.gl/maps/ManiMandir"
  },
  {
    id: 10,
    name: "Sankat Mochan",
    description: "Famous Hanuman temple established by Tulsidas. Known for fulfilling wishes.",
    image: sankatImg,
    tag: "Devotion",
    mapLink: "https://goo.gl/maps/SankatMochan"
  },
  {
    id: 11,
    name: "BHU Vishwanath",
    description: "Located inside BHU campus, it has the tallest temple tower in the world.",
    image: bhuImg,
    tag: "Architecture",
    mapLink: "https://goo.gl/maps/BHU"
  },
  {
    id: 12,
    name: "Kabir Math",
    description: "Place of Saint Kabir Das, a symbol of peace and harmony.",
    image: kabirImg,
    tag: "Harmony",
    mapLink: "https://goo.gl/maps/KabirMath"
  },
  {
    id: 13,
    name: "Bada Ganesh",
    description: "Ancient Ganesha temple with a huge idol of Lord Ganesha.",
    image: ganeshImg,
    tag: "Beginnings",
    mapLink: "https://goo.gl/maps/BadaGanesh"
  },
  {
    id: 14,
    name: "Sarnath Temple",
    description: "The holy site where Lord Buddha gave his first sermon. Witness the Dhamek Stupa.",
    image: sarnathImg,
    tag: "Buddhist Heritage",
    mapLink: "https://goo.gl/maps/Sarnath"
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
                
                {/* GOOGLE MAPS ICON */}
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
