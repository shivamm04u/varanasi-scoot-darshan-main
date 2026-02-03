import { useState } from "react";
import { MapPin, Navigation, X, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// --- LOCAL IMAGE IMPORTS (Make sure these files exist!) ---
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
    description: "One of the most famous Hindu temples dedicated to Lord Shiva.",
    fullDesc: "The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva Temples.",
    image: kashiImg,
    tag: "Spiritual Heart",
    mapLink: "https://goo.gl/maps/KashiVishwanath",
    embedMap: "https://maps.google.com/maps?q=Kashi+Vishwanath+Temple&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "3:00 AM – 11:00 PM"
  },
  {
    id: 2,
    name: "Dashashwamedh Ghat",
    description: "Experience the world-famous Ganga Aarti every evening.",
    fullDesc: "Dashashwamedh Ghat is the main ghat in Varanasi on the Ganga River. It is located close to Vishwanath Temple and is probably the most spectacular ghat.",
    image: gangaImg,
    tag: "Ganga Aarti",
    mapLink: "https://goo.gl/maps/Dashashwamedh",
    embedMap: "https://maps.google.com/maps?q=Dashashwamedh+Ghat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "Open 24 Hours (Aarti: 6:45 PM)"
  },
  {
    id: 3,
    name: "Manikarnika Ghat",
    description: "The Mahashmashana where life meets death.",
    fullDesc: "Manikarnika Ghat is one of the holiest cremation grounds among the sacred riverfronts (ghats), alongside the river Ganges.",
    image: manikarnikaImg,
    tag: "Moksha",
    mapLink: "https://goo.gl/maps/Manikarnika",
    embedMap: "https://maps.google.com/maps?q=Manikarnika+Ghat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "Open 24 Hours"
  },
  {
    id: 4,
    name: "Assi Ghat",
    description: "A peaceful ghat where pilgrims pay homage to Lord Shiva.",
    fullDesc: "Assi Ghat is the southernmost ghat in Varanasi. To most visitors to Varanasi, it is known for being a place where long-term foreign students live.",
    image: assiImg,
    tag: "Morning Vibes",
    mapLink: "https://goo.gl/maps/AssiGhat",
    embedMap: "https://maps.google.com/maps?q=Assi+Ghat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "Open 24 Hours"
  },
  {
    id: 5,
    name: "Tulsi Ghat",
    description: "Associated with poet Tulsidas who wrote Ramcharitmanas here.",
    fullDesc: "Tulsi Ghat is named after Tulsidas who lived there while he wrote the Ramcharitmanas.",
    image: tulsiImg,
    tag: "History",
    mapLink: "https://goo.gl/maps/TulsiGhat",
    embedMap: "https://maps.google.com/maps?q=Tulsi+Ghat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "Open 24 Hours"
  },
  {
    id: 6,
    name: "Durga Mandir",
    description: "Ancient temple dedicated to Goddess Durga.",
    fullDesc: "Durga Mandir is one of the most famous temples in the holy city of Varanasi. Dedicated to Maa Durga.",
    image: durgaImg,
    tag: "Shakti Peeth",
    mapLink: "https://goo.gl/maps/DurgaMandir",
    embedMap: "https://maps.google.com/maps?q=Durga+Mandir+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "5:00 AM – 10:00 PM"
  },
  {
    id: 7,
    name: "Tulsi Manas Mandir",
    description: "Modern marble temple with verses of Ramcharitmanas.",
    fullDesc: "Tulsi Manas Mandir is one of the most famous temples in Varanasi. The temple is dedicated to Lord Rama.",
    image: tulsiManasImg,
    tag: "Ramayana",
    mapLink: "https://goo.gl/maps/TulsiManas",
    embedMap: "https://maps.google.com/maps?q=Tulsi+Manas+Mandir&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "5:30 AM – 12:00 PM"
  },
  {
    id: 8,
    name: "Tridev Mandir",
    description: "Beautiful temple dedicated to Brahma, Vishnu, and Mahesh.",
    fullDesc: "Tridev Mandir is a beautiful temple located near Tulsi Manas Mandir. Dedicated to the holy trinity.",
    image: tridevImg,
    tag: "Divinity",
    mapLink: "https://goo.gl/maps/TridevMandir",
    embedMap: "https://maps.google.com/maps?q=Tridev+Mandir+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "6:00 AM – 9:00 PM"
  },
  {
    id: 9,
    name: "Mani Mandir",
    description: "Located near BHU, a serene temple dedicated to Lord Shiva.",
    fullDesc: "Mani Mandir is a relatively newer but architecturally stunning temple located in the Durgakund area.",
    image: maniImg,
    tag: "Peace",
    mapLink: "https://goo.gl/maps/ManiMandir",
    embedMap: "https://maps.google.com/maps?q=Mani+Mandir+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "6:00 AM – 8:00 PM"
  },
  {
    id: 10,
    name: "Sankat Mochan",
    description: "Famous Hanuman temple established by Tulsidas.",
    fullDesc: "Sankat Mochan Hanuman Temple is a Hindu temple in Varanasi dedicated to the Hindu God Hanuman.",
    image: sankatImg,
    tag: "Devotion",
    mapLink: "https://goo.gl/maps/SankatMochan",
    embedMap: "https://maps.google.com/maps?q=Sankat+Mochan+Hanuman+Temple&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "5:00 AM – 10:00 PM"
  },
  {
    id: 11,
    name: "BHU Vishwanath",
    description: "Located inside BHU campus, tallest temple tower.",
    fullDesc: "Shri Vishwanath Mandir also known as VT is located in the Banaras Hindu University.",
    image: bhuImg,
    tag: "Architecture",
    mapLink: "https://goo.gl/maps/BHU",
    embedMap: "https://maps.google.com/maps?q=New+Vishwanath+Temple+BHU&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "4:00 AM – 9:00 PM"
  },
  {
    id: 12,
    name: "Kabir Math",
    description: "Place of Saint Kabir Das, a symbol of peace.",
    fullDesc: "Kabir Math is located at Kabir Chaura, Varanasi. It is the place of residence of the famous saint Kabir Das.",
    image: kabirImg,
    tag: "Harmony",
    mapLink: "https://goo.gl/maps/KabirMath",
    embedMap: "https://maps.google.com/maps?q=Kabir+Chaura+Math&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "6:00 AM – 8:00 PM"
  },
  {
    id: 13,
    name: "Bada Ganesh",
    description: "Ancient Ganesha temple with a huge idol.",
    fullDesc: "The Bada Ganesh Temple houses a gigantic statue of Lord Ganesh with a silver face.",
    image: ganeshImg,
    tag: "Beginnings",
    mapLink: "https://goo.gl/maps/BadaGanesh",
    embedMap: "https://maps.google.com/maps?q=Bada+Ganesh+Temple+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "5:00 AM – 10:00 PM"
  },
  {
    id: 14,
    name: "Sarnath Temple",
    description: "The holy site where Lord Buddha gave his first sermon.",
    fullDesc: "Sarnath is a place located 10 kilometres north-east of Varanasi near the confluence of the Ganges and the Varuna rivers.",
    image: sarnathImg,
    tag: "Buddhist Heritage",
    mapLink: "https://goo.gl/maps/Sarnath",
    embedMap: "https://maps.google.com/maps?q=Sarnath&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "8:00 AM – 6:00 PM"
  }
];

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);

  return (
    <section id="locations" className="py-20 bg-background relative">
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
            Visit all 14 sacred sites in Kashi with our guided solo scooter tours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div 
              key={location.id} 
              className="group rounded-3xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative"
              onClick={() => setSelectedLocation(location)}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                  {location.tag}
                </div>
                
                {/* Visual Map Icon Overlay */}
                <div className="absolute bottom-4 right-4 z-20 bg-white/90 p-2 rounded-full shadow-lg text-primary transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary hover:text-white">
                  <Navigation className="w-5 h-5" />
                </div>

                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                <h3 className="absolute bottom-4 left-6 text-2xl font-serif font-bold text-white max-w-[80%]">
                  {location.name}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {location.description}
                </p>
                <div className="flex items-center text-sm text-primary font-medium group-hover:underline">
                  Tap to view location & details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SLIDE-OVER DRAWER --- */}
      {selectedLocation && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity animate-in fade-in"
            onClick={() => setSelectedLocation(null)}
          />
          
          <div className="fixed inset-y-0 right-0 z-[70] w-full md:w-[500px] bg-background shadow-2xl transform transition-transform duration-300 ease-in-out animate-in slide-in-from-right border-l border-border overflow-y-auto">
            <button 
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors z-20 text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-72 w-full relative">
              <img 
                src={selectedLocation.image} 
                alt={selectedLocation.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-primary px-3 py-1 text-white text-xs rounded-full font-bold mb-3 inline-block shadow-md">
                  {selectedLocation.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                  {selectedLocation.name}
                </h2>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <div className="space-y-3">
                <h3 className="text-lg font-bold flex items-center gap-2 text-primary">
                  <Info className="w-5 h-5" /> About the Place
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {selectedLocation.fullDesc}
                </p>
              </div>

              <div className="bg-accent/5 p-4 rounded-xl border border-accent/20 flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground text-sm">Opening Hours</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {selectedLocation.timings}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" /> Location Map
                </h3>
                <div className="rounded-xl overflow-hidden border border-border shadow-sm h-64 w-full bg-gray-100">
                  <iframe 
                    src={selectedLocation.embedMap}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a href={selectedLocation.mapLink} target="_blank" rel="noreferrer" className="w-full">
                  <Button variant="outline" className="w-full py-6 text-base border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                    <Navigation className="w-5 h-5 mr-2" /> Open in Google Maps
                  </Button>
                </a>
                <Link to="/book" className="w-full">
                  <Button variant="saffron" className="w-full py-6 text-base font-bold shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all">
                    Book a Scooter Tour Here
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Locations;
