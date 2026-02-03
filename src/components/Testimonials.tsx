import { useState } from "react";
import { Star, Quote, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const originalTestimonials = [
  { name: "Ravi Sharma", location: "Delhi", text: "Best decision ever! Solo scooter darshan was life-changing. Reached Kashi Vishwanath without crowd hassle. Baba ji guided us through every gali with such knowledge!", rating: 5 },
  { name: "Priya Gupta", location: "Mumbai", text: "Loved the flexibility! Stopped at every ghat for photos and prayers. The local guide experience was excellent. No auto-rickshaw bargaining needed!", rating: 5 },
  { name: "Ajay Patel", location: "Ahmedabad", text: "Value for money! ₹1,999 for full day darshan + Ganga Aarti boat included. No hidden charges as promised. Highly recommended for first-time visitors!", rating: 5 },
  { name: "Sunita Devi", location: "Kolkata", text: "As a solo female traveler, I felt 100% safe. Baba Banarasi took care of everything. The scooter ride through narrow lanes was such a unique experience!", rating: 5 },
  { name: "Rahul Verma", location: "Bangalore", text: "Perfect for vloggers and influencers! They even helped with taking photos and videos during the trip. Will definitely come back again!", rating: 5 },
  { name: "Meera Joshi", location: "Pune", text: "Saved so much time and energy compared to walking. Covered 13 temples in one day! The morning and afternoon session plan was perfectly organized.", rating: 5 },
  { name: "Anil Kumar", location: "Jaipur", text: "My parents are elderly and couldn't walk much. This scooter darshan was a blessing! They could visit all temples comfortably. Thank you Baba Banarasi!", rating: 5 },
  { name: "Kavita Singh", location: "Lucknow", text: "The Ganga Aarti experience was magical! Our guide found the perfect spot for us to watch. The whole day was planned so smoothly.", rating: 5 },
  { name: "Deepak Sharma", location: "Chandigarh", text: "Visited Varanasi for the first time and this service made it so easy! The guide knew all the history and stories about each temple. Very knowledgeable!", rating: 5 },
  { name: "Neha Agarwal", location: "Indore", text: "Booked via WhatsApp and everything was arranged perfectly. Pickup was on time, scooter was clean, and the guide was very friendly. 5 stars!", rating: 5 },
  { name: "Vikram Rao", location: "Hyderabad", text: "As a content creator, I needed someone who understands good angles and timing. Baba Banarasi team was perfect for capturing my Varanasi journey!", rating: 5 },
  { name: "Anjali Mishra", location: "Patna", text: "The best part was no rushing! We took our time at each temple, offered proper prayers, and still finished everything including Ganga Aarti.", rating: 5 }
];

const Testimonials = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState(originalTestimonials);
  const [showAll, setShowAll] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", location: "", rating: 5, text: "" });

  const displayedTestimonials = showAll ? reviews : reviews.slice(0, 6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = { ...formData, date: "Just now" };
    setReviews([newReview, ...reviews]);
    setShowForm(false);
    setFormData({ name: "", location: "", rating: 5, text: "" });
    toast({ title: "Review Submitted!", description: "Thank you for sharing your experience." });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* HEADER (Original) */}
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

        {/* --- WRITE REVIEW FORM (Seamlessly Integrated) --- */}
        <div className="max-w-2xl mx-auto mb-16">
          {!showForm ? (
            <div className="text-center">
              <Button 
                onClick={() => setShowForm(true)}
                variant="outline" 
                className="gap-2 border-primary/50 text-primary hover:bg-primary/5 px-8 py-6 rounded-full text-lg font-bold shadow-sm transition-all"
              >
                ✍️ Write a Review
              </Button>
            </div>
          ) : (
            <div className="bg-cream p-8 rounded-3xl shadow-xl border border-border animate-in fade-in slide-in-from-bottom-4 relative">
              <div className="absolute -top-4 left-8 bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">✍️</div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">Share Your Experience</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <input required type="text" className="w-full p-3 rounded-lg border bg-white focus:border-primary outline-none" placeholder="Enter Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>
                    <input required type="text" className="w-full p-3 rounded-lg border bg-white focus:border-primary outline-none" placeholder="City" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" onClick={() => setFormData({...formData, rating: star})} className={`text-2xl transition-transform hover:scale-110 ${formData.rating >= star ? 'text-gold' : 'text-gray-300'}`}>★</button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Review</label>
                  <textarea required rows={3} className="w-full p-3 rounded-lg border bg-white focus:border-primary outline-none resize-none" placeholder="How was your darshan?" value={formData.text} onChange={e => setFormData({...formData, text: e.target.value})} />
                </div>

                <div className="flex gap-4 pt-2">
                  <Button type="button" variant="ghost" className="flex-1" onClick={() => setShowForm(false)}>Cancel</Button>
                  <Button type="submit" className="flex-1 bg-gradient-saffron text-white font-bold shadow-md hover:scale-105 transition-all">Submit Review <Send className="w-4 h-4 ml-2" /></Button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* REVIEWS GRID (Original Design) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-cream p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-saffron flex items-center justify-center text-primary-foreground font-bold text-xl shadow-inner">
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

        {/* SHOW MORE / LESS */}
        {reviews.length > 6 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setShowAll(!showAll)}
              className="gap-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary transition-all rounded-full px-8"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show More Reviews <ChevronDown className="w-4 h-4" /></>
              )}
            </Button>
          </div>
        )}

        {/* STATS (Original) */}
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
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">14</div>
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
