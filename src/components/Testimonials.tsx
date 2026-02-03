import { Star, User, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Initial Reviews
const initialReviews = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    rating: 5,
    text: "The best way to see Varanasi! Our guide knew all the hidden spots and the scooter ride was so fun. Highly recommended for solo travelers.",
    date: "2 days ago"
  },
  {
    name: "Sarah Jenkins",
    location: "UK",
    rating: 5,
    text: "Safe, authentic, and truly spiritual. The morning boat ride and Sarnath visit were highlights. Thank you Baba Banarasi team!",
    date: "1 week ago"
  },
  {
    name: "Amit Patel",
    location: "Mumbai",
    rating: 4,
    text: "Great experience. Much better than walking or auto. The guide was very knowledgeable about the history of Kashi.",
    date: "2 weeks ago"
  }
];

const Testimonials = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", rating: 5, text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new review object
    const newReview = {
      name: formData.name,
      location: "Visitor",
      rating: formData.rating,
      text: formData.text,
      date: "Just now"
    };

    // Add to list (Simulated)
    setReviews([newReview, ...reviews]);
    setShowForm(false);
    setFormData({ name: "", rating: 5, text: "" });

    toast({
      title: "Review Submitted!",
      description: "Thank you for sharing your experience.",
    });
  };

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Guest Reviews</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Traveler <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our guests say about their spiritual journey in Kashi.
          </p>
        </div>

        {/* --- REVIEW FORM SECTION --- */}
        <div className="max-w-2xl mx-auto mb-16">
          {!showForm ? (
            <div className="text-center">
              <Button 
                onClick={() => setShowForm(true)}
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-full text-lg font-bold shadow-lg transition-all hover:scale-105"
              >
                ✍️ Write a Review
              </Button>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">Share Your Experience</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className={`text-2xl transition-transform hover:scale-110 ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Review</label>
                  <textarea 
                    required 
                    rows={4} 
                    className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your experience..."
                    value={formData.text}
                    onChange={e => setFormData({...formData, text: e.target.value})}
                  />
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    className="flex-1"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-saffron text-white font-bold shadow-lg hover:scale-105 transition-all"
                  >
                    Submit Review <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>

              </form>
            </div>
          )}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-border group animate-in fade-in zoom-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.location} • {review.date}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} 
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
