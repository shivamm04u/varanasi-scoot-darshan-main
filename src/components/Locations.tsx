import { MapPin, Clock, Star, Sun, Sunset, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import assiGhat from "@/assets/locations/assi-ghat.jpg";
import tulsiGhat from "@/assets/locations/tulsi-ghat.jpg";
import durgaMandir from "@/assets/locations/durga-mandir.jpg";
import tulsiManasMandir from "@/assets/locations/tulsi-manas-mandir.jpg";
import tridevMandir from "@/assets/locations/tridev-mandir.jpg";
import maniMandir from "@/assets/locations/mani-mandir.jpg";
import sankatMochan from "@/assets/locations/sankat-mochan.jpg";
import bhuVishwanath from "@/assets/locations/bhu-vishwanath.jpg";
import kabirMath from "@/assets/locations/kabir-math.jpg";
import badaGanesh from "@/assets/locations/bada-ganesh.jpg";
import kalBhairav from "@/assets/locations/kal-bhairav.jpg";
import kashiVishwanath from "@/assets/locations/kashi-vishwanath.jpg";
import gangaAarti from "@/assets/locations/ganga-aarti.jpg";
import sarnathImg from "@/assets/locations/sarnath.jpg";

const morningLocations = [
  {
    id: 1,
    name: "Assi Ghat",
    image: assiGhat,
    description: "Start your spiritual journey at sunrise where the Assi river meets the Ganges. Perfect for morning yoga and prayers.",
    duration: "30 mins",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Tulsi Ghat",
    image: tulsiGhat,
    description: "Named after the great poet Tulsidas who wrote Ramcharitmanas here. A serene ghat with rich literary history.",
    duration: "20 mins",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Durga Mata Mandir",
    image: durgaMandir,
    description: "Famous as the 'Monkey Temple' due to the many monkeys around. Beautiful red stone architecture dedicated to Goddess Durga.",
    duration: "30 mins",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Tulsi Manas Mandir",
    image: tulsiManasMandir,
    description: "A beautiful marble temple where Tulsidas wrote the epic Ramcharitmanas. Walls inscribed with verses from the epic.",
    duration: "30 mins",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Tridev Mandir",
    image: tridevMandir,
    description: "Dedicated to the holy trinity - Brahma, Vishnu, and Mahesh. A unique temple representing creation, preservation, and destruction.",
    duration: "20 mins",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Mani Mandir (BHU)",
    image: maniMandir,
    description: "Located within the beautiful BHU campus, this temple is known for its peaceful atmosphere and architectural beauty.",
    duration: "30 mins",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Sankat Mochan",
    image: sankatMochan,
    description: "One of the most sacred Hanuman temples in India. Believed to free devotees from all troubles and obstacles.",
    duration: "30 mins",
    rating: 4.9,
  },
  {
    id: 8,
    name: "BHU Vishwanath Temple",
    subtitle: "(if time permits)",
    image: bhuVishwanath,
    description: "A magnificent Shiva temple in BHU campus. Known for its tall shikhara and open-to-all policy regardless of caste or religion.",
    duration: "30 mins",
    rating: 4.9,
  },
];

const afternoonLocations = [
  {
    id: 9,
    name: "Kabir Math & Kabir Chaura",
    image: kabirMath,
    description: "The sacred place where Sant Kabir lived and meditated. A pilgrimage site for followers of Kabir's philosophy.",
    duration: "30 mins",
    rating: 4.7,
  },
  {
    id: 10,
    name: "Bada Ganesh Darshan",
    image: badaGanesh,
    description: "One of the most famous Ganesh temples in Varanasi. Devotees seek blessings before visiting Kashi Vishwanath.",
    duration: "20 mins",
    rating: 4.8,
  },
  {
    id: 11,
    name: "Kal Bhairav Temple",
    image: kalBhairav,
    description: "The guardian deity of Kashi. It is believed that visiting Kal Bhairav is essential for any Kashi yatra.",
    duration: "30 mins",
    rating: 4.9,
  },
  {
    id: 12,
    name: "Kashi Vishwanath",
    image: kashiVishwanath,
    description: "The holiest Shiva temple in Varanasi, one of the 12 Jyotirlingas. The ultimate destination of every Kashi pilgrimage.",
    duration: "1 hour",
    rating: 5.0,
  },
  {
    id: 13,
    name: "Ganga Aarti",
    image: gangaAarti,
    description: "Experience the spectacular evening Ganga Aarti at Dashashwamedh Ghat. A mesmerizing spiritual ceremony you'll never forget.",
    duration: "1 hour",
    rating: 5.0,
  },
  {
    id: 14,
    name: "Sarnath Temple",
    description: "The holy site where Lord Buddha gave his first sermon. Witness the Dhamek Stupa and peaceful gardens.",
    image: sarnathImg,
    tag: "Buddhist Heritage"
  },
];

interface Location {
  id: number;
  name: string;
  subtitle?: string;
  image: string;
  description: string;
  duration: string;
  rating: number;
}

const LocationCard = ({ location }: { location: Location }) => (
  <div className="card-location group">
    <div className="relative h-48 overflow-hidden">
      <img
        src={location.image}
        alt={location.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
      
      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
        {location.id}
      </div>

      <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
        <Star className="w-3 h-3 fill-primary text-primary" />
        <span className="text-xs font-semibold">{location.rating}</span>
      </div>

      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="font-serif text-lg font-bold text-primary-foreground">
          {location.name}
        </h3>
        {location.subtitle && (
          <span className="text-xs text-primary-foreground/80 italic">{location.subtitle}</span>
        )}
      </div>
    </div>

    <div className="p-4">
      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
        {location.description}
      </p>
      
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="w-3 h-3 text-primary" />
        <span>{location.duration}</span>
      </div>
    </div>
  </div>
);

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Sacred Destinations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore{" "}
            <span className="gradient-text">Holy Varanasi</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Visit all 14 sacred sites in Kashi with our guided solo scooter tours. 
            Each location is rich with spiritual significance and ancient history.
          </p>
        </div>

        {/* Morning Session */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-saffron flex items-center justify-center">
              <Sun className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground">Morning Session</h3>
              <p className="text-muted-foreground">8:00 AM – 12:00 PM | Assi Ghat to BHU</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {morningLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>

        {/* Rest Break */}
        <div className="flex items-center justify-center gap-4 mb-16 py-8 bg-secondary/30 rounded-2xl">
          <Coffee className="w-6 h-6 text-primary" />
          <span className="text-lg text-muted-foreground font-medium">
            ~2.5 hours rest at the hotel between sessions
          </span>
        </div>

        {/* Afternoon Session */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-sunset flex items-center justify-center">
              <Sunset className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground">Afternoon Session</h3>
              <p className="text-muted-foreground">2:30 PM onwards | Kabir Math to Ganga Aarti</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {afternoonLocations.map((location) => (
              <LocationCard key={location.id} location={location as Location} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/book">
            <Button variant="saffron" size="xl">
              Book Your 14-Point Darshan Tour
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Locations;
