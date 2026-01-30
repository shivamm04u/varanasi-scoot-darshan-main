import aboutImage from "@/assets/baba-banarasi-poster.jpg";
import { MapPin, Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Baba Banarasi Solo Scooter Darshan" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-center">
                <div className="text-3xl font-bold">₹1,999</div>
                <div className="text-sm opacity-90">Starting Price</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">About Us</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who is <span className="text-primary">Baba Banarasi</span>?
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong>Baba Banarasi</strong> is a local, trusted travel service based in Varanasi (Kashi), 
              offering a unique <strong>Solo Scooter Darshan</strong> experience for travelers who want to 
              explore the spiritual city freely and comfortably.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our mission is to provide a <strong>personal, flexible, and authentic Kashi darshan</strong> without 
              rushing, crowded groups, or hidden charges. With Baba Banarasi, guests explore famous temples, 
              ghats, and spiritual spots on a scooter, guided by a knowledgeable local who understands the 
              culture, history, and spiritual importance of Banaras.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We focus on <strong>comfort, safety, transparency,</strong> and a truly local experience, 
              making every journey memorable for our guests.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Based in</div>
                  <div className="text-muted-foreground">Varanasi (Kashi)</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Perfect for</div>
                  <div className="text-muted-foreground">Solo Travelers</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">100%</div>
                  <div className="text-muted-foreground">Safe & Trusted</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">No Hidden</div>
                  <div className="text-muted-foreground">Charges</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
