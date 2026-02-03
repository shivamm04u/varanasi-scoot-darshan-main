import { useState } from "react";
import { MapPin, Navigation, X, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ONLINE IMAGES (Safe from build errors)
const images = {
  kashi: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Kashi_Vishwanath_Temple_Varanasi.jpg/800px-Kashi_Vishwanath_Temple_Varanasi.jpg",
  ganga: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ganga_Aarti_at_Dashashwamedh_Ghat.jpg/800px-Ganga_Aarti_at_Dashashwamedh_Ghat.jpg",
  manikarnika: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Manikarnika_Ghat_2013.jpg/800px-Manikarnika_Ghat_2013.jpg",
  assi: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Assi_Ghat_Varanasi.jpg/800px-Assi_Ghat_Varanasi.jpg",
  tulsi: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tulsi_Ghat_Varanasi.jpg/800px-Tulsi_Ghat_Varanasi.jpg",
  durga: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Durga_Mandir_Ramnagar.jpg/800px-Durga_Mandir_Ramnagar.jpg",
  tulsiManas: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Tulsi_Manas_Mandir.jpg/800px-Tulsi_Manas_Mandir.jpg",
  tridev: "https://lh5.googleusercontent.com/p/AF1QipN-7-7-7-7-7-7-7-7-7-7-7-7-7-7-7-7-7/w408-h306-k-no", // Placeholder
  mani: "https://lh5.googleusercontent.com/p/AF1QipN-7-7-7-7-7-7-7-7-7-7-7-7-7-7-7-7-7/w408-h306-k-no", // Placeholder
  sankat: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Sankat_Mochan_Hanuman_Temple.jpg/800px-Sankat_Mochan_Hanuman_Temple.jpg",
  bhu: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/New_Vishwanath_Temple_BHU.jpg/800px-New_Vishwanath_Temple_BHU.jpg",
  kabir: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Kabir_Chaura_Math.jpg/800px-Kabir_Chaura_Math.jpg",
  ganesh: "https://lh5.googleusercontent.com/p/AF1QipN-7-7-7-7-7-7-7-7-7-7-7-7-7-7-7-7-7/w408-h306-k-no", // Placeholder
  sarnath: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Dhamekh_Stupa_Sarnath.jpg/800px-Dhamekh_Stupa_Sarnath.jpg"
};

const locations = [
  {
    id: 1,
    name: "Kashi Vishwanath Temple",
    description: "One of the most famous Hindu temples dedicated to Lord Shiva. A must-visit spiritual center.",
    fullDesc: "The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva Temples.",
    image: images.kashi,
    tag: "Spiritual Heart",
    mapLink: "https://goo.gl/maps/KashiVishwanath",
    embedMap: "https://maps.google.com/maps?q=Kashi+Vishwanath+Temple&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "3:00 AM – 11:00 PM"
  },
  {
    id: 2,
    name: "Dashashwamedh Ghat",
    description: "Experience the world-famous Ganga Aarti every evening. The most vibrant ghat in Varanasi.",
    fullDesc: "Dashashwamedh Ghat is the main ghat in Varanasi on the Ganga River. It is located close to Vishwanath Temple and is probably the most spectacular ghat.",
    image: images.ganga,
    tag: "Ganga Aarti",
    mapLink: "https://goo.gl/maps/Dashashwamedh",
    embedMap: "https://maps.google.com/maps?q=Dashashwamedh+Ghat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "Open 24 Hours (Aarti: 6:45 PM)"
  },
  {
    id: 3,
    name: "Manikarnika Ghat",
    description: "The Mahashmashana where life meets death. A powerful place for spiritual realization.",
    fullDesc: "Manikarnika Ghat is one of the holiest cremation grounds among the sacred riverfronts (ghats), alongside the river Ganges.",
    image: images.manikarnika,
    tag: "Moksha",
    mapLink: "https://goo.gl/maps/Manikarnika",
    embedMap: "https://maps.google.com/maps?q=Manikarnika+Ghat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "Open 24 Hours"
  },
  {
    id: 4,
    name: "Assi Ghat",
    description: "A peaceful ghat where pilgrims pay homage to Lord Shiva. Famous for Morning Aarti.",
    fullDesc: "Assi Ghat is the southernmost ghat in Varanasi. To most visitors to Varanasi, it is known for being a place where long-term foreign students, researchers, and tourists live.",
    image: images.assi,
    tag: "Morning Vibes",
    mapLink: "https://goo.gl/maps/AssiGhat",
    embedMap: "https://maps.google.com/maps?q=Assi+Ghat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "Open 24 Hours"
  },
  {
    id: 5,
    name: "Tulsi Ghat",
    description: "Associated with poet Tulsidas who wrote Ramcharitmanas here.",
    fullDesc: "Tulsi Ghat is one of the ghats in Varanasi. It is named after Tulsidas who lived there while he wrote the Ramcharitmanas.",
    image: images.tulsi,
    tag: "History",
    mapLink: "https://goo.gl/maps/TulsiGhat",
    embedMap: "https://maps.google.com/maps?q=Tulsi+Ghat&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "Open 24 Hours"
  },
  {
    id: 6,
    name: "Durga Mandir",
    description: "Ancient temple dedicated to Goddess Durga, known for its red color and monkey inhabitants.",
    fullDesc: "Durga Mandir is one of the most famous temples in the holy city of Varanasi. This temple has great religious importance for Hinduism and is dedicated to the Maa Durga.",
    image: images.durga,
    tag: "Shakti Peeth",
    mapLink: "https://goo.gl/maps/DurgaMandir",
    embedMap: "https://maps.google.com/maps?q=Durga+Mandir+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "5:00 AM – 10:00 PM"
  },
  {
    id: 7,
    name: "Tulsi Manas Mandir",
    description: "Modern marble temple with verses of Ramcharitmanas inscribed on walls.",
    fullDesc: "Tulsi Manas Mandir is one of the most famous temples in Varanasi. The temple is dedicated to Lord Rama.",
    image: images.tulsiManas,
    tag: "Ramayana",
    mapLink: "https://goo.gl/maps/TulsiManas",
    embedMap: "https://maps.google.com/maps?q=Tulsi+Manas+Mandir&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "5:30 AM – 12:00 PM, 3:30 PM – 9:00 PM"
  },
  {
    id: 8,
    name: "Tridev Mandir",
    description: "Beautiful temple dedicated to Brahma, Vishnu, and Mahesh.",
    fullDesc: "Tridev Mandir is a beautiful temple located near Tulsi Manas Mandir. It is dedicated to the holy trinity of Hinduism.",
    image: images.tridev,
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
    image: images.mani,
    tag: "Peace",
    mapLink: "https://goo.gl/maps/ManiMandir",
    embedMap: "https://maps.google.com/maps?q=Mani+Mandir+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "6:00 AM – 8:00 PM"
  },
  {
    id: 10,
    name: "Sankat Mochan",
    description: "Famous Hanuman temple established by Tulsidas. Known for fulfilling wishes.",
    fullDesc: "Sankat Mochan Hanuman Temple is a Hindu temple in Varanasi, Uttar Pradesh, India and is dedicated to the Hindu God Hanuman.",
    image: images.sankat,
    tag: "Devotion",
    mapLink: "https://goo.gl/maps/SankatMochan",
    embedMap: "https://maps.google.com/maps?q=Sankat+Mochan+Hanuman+Temple&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "5:00 AM – 10:00 PM"
  },
  {
    id: 11,
    name: "BHU Vishwanath",
    description: "Located inside BHU campus, it has the tallest temple tower in the world.",
    fullDesc: "Shri Vishwanath Mandir also known as VT is one of the most famous tourist places in Varanasi.",
    image: images.bhu,
    tag: "Architecture",
    mapLink: "https://goo.gl/maps/BHU",
    embedMap: "https://maps.google.com/maps?q=New+Vishwanath+Temple+BHU&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "4:00 AM – 9:00 PM"
  },
  {
    id: 12,
    name: "Kabir Math",
    description: "Place of Saint Kabir Das, a symbol of peace and harmony.",
    fullDesc: "Kabir Math is located at Kabir Chaura, Varanasi. It is the place of residence of the famous saint Kabir Das.",
    image: images.kabir,
    tag: "Harmony",
    mapLink: "https://goo.gl/maps/KabirMath",
    embedMap: "https://maps.google.com/maps?q=Kabir+Chaura+Math&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "6:00 AM – 8:00 PM"
  },
  {
    id: 13,
    name: "Bada Ganesh",
    description: "Ancient Ganesha temple with a huge idol of Lord Ganesha.",
    fullDesc: "The Bada Ganesh Temple is located near the Lohatia area. It houses a gigantic statue of Lord Ganesh.",
    image: images.ganesh,
    tag: "Beginnings",
    mapLink: "https://goo.gl/maps/BadaGanesh",
    embedMap: "https://maps.google.com/maps?q=Bada+Ganesh+Temple+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed",
    timings: "5:00 AM – 10:00 PM"
  },
  {
    id: 14,
    name: "Sarnath Temple",
    description: "The holy site where Lord Buddha gave his first sermon. Witness the Dhamek Stupa.",
    fullDesc: "Sarnath is a place located 10 kilometres north-east of Varanasi. The deer park in Sarnath is where Gautama Buddha first taught the Dharma.",
    image: images.sarnath,
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
                
                {/* --- THIS IS THE MAP ICON YOU ASKED FOR --- */}
                <div 
                  className="absolute bottom-4 right-4 z-20 bg-white/90 p-2 rounded-full shadow-lg text-primary transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary hover:text-white"
                  title="View Details & Map"
                >
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

      {/* --- SLIDE-OVER DRAWER (Map + Details) --- */}
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

              {/* EMBEDDED MAP */}
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
