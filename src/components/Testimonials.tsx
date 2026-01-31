import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Sharma",
    location: "Delhi",
    text: "Best decision ever! Solo scooter darshan was life-changing. Reached Kashi Vishwanath without crowd hassle. Baba ji guided us through every gali with such knowledge!",
    rating: 5
  },
  {
    name: "Priya Gupta",
    location: "Mumbai",
    text: "Loved the flexibility! Stopped at every ghat for photos and prayers. The local guide experience was excellent. No auto-rickshaw bargaining needed!",
    rating: 5
  },
  {
    name: "Ajay Patel",
    location: "Ahmedabad",
    text: "Value for money! ₹1,999 for full day darshan + Ganga Aarti boat included. No hidden charges as promised. Highly recommended for first-time visitors!",
    rating: 5
  },
  {
    name: "Sunita Devi",
    location: "Kolkata",
    text: "As a solo female traveler, I felt 100% safe. Baba Banarasi took care of everything. The scooter ride through narrow lanes was such a unique experience!",
    rating: 5
  },
  {
    name: "Rahul Verma",
    location: "Bangalore",
    text: "Perfect for vloggers and influencers! They even helped with taking photos and videos during the trip. Will definitely come back again!",
    rating: 5
  },
  {
    name: "Meera Joshi",
    location: "Pune",
    text: "Saved so much time and energy compared to walking. Covered 13 temples in one day! The morning and afternoon session plan was perfectly organized.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What <span className="text-primary">Pilgrims Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            1000+ Happy Kashi Yatris have experienced the magic of Solo Scooter Darshan
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-cream p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-saffron flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Happy Pilgrims</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5.0</div>
            <div className="text-muted-foreground">Star Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Sacred Sites</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Safe Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
