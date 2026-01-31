import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, MessageCircle, Mail, MapPin, Clock, Bike, Calendar, User } from "lucide-react";
import scooterImage from "@/assets/scooter-varanasi.jpg";
import { useToast } from "@/hooks/use-toast";

const locations = [
  { value: "kashi-vishwanath", label: "Kashi Vishwanath Temple" },
  { value: "dashashwamedh", label: "Dashashwamedh Ghat" },
  { value: "manikarnika", label: "Manikarnika Ghat" },
  { value: "assi-ghat", label: "Assi Ghat" },
  { value: "sarnath", label: "Sarnath" },
];

const durations = [
  { value: "6", label: "Half Day", price: 999 },
  { value: "12", label: "Full Day (8 AM - 8 PM with 2 hour rest)", price: 1999 },
];

const BookTour = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupLocation: "",
    duration: "12",
    date: "",
    specialRequests: ""
  });

  const selectedDuration = durations.find(d => d.value === formData.duration);
  const totalPrice = selectedDuration?.price || 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `🛵 *Baba Banarasi Solo Scooter Darshan Booking*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
📍 *Pickup:* ${locations.find(l => l.value === formData.pickupLocation)?.label || 'Not selected'}
⏱️ *Duration:* ${selectedDuration?.label}
📅 *Date:* ${formData.date}
💰 *Total:* ₹${totalPrice}

${formData.specialRequests ? `📝 *Special Requests:* ${formData.specialRequests}` : ''}

🙏 Har Har Mahadev!`;

    const whatsappUrl = `https://wa.me/917991301043?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Booking Request Sent!",
      description: "We'll confirm your booking on WhatsApp shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Book Your Journey
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solo Scooter{" "}
              <span className="gradient-text">Darshan Booking</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill in your details and we'll arrange your perfect Varanasi pilgrimage experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Details */}
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Personal Details
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Tour Details */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="font-serif text-xl font-bold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Tour Details
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Pickup Location *</Label>
                      <Select
                        value={formData.pickupLocation}
                        onValueChange={(value) => handleSelectChange("pickupLocation", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location.value} value={location.value}>
                              {location.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Date *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Duration *</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {durations.map((duration) => (
                        <button
                          key={duration.value}
                          type="button"
                          onClick={() => handleSelectChange("duration", duration.value)}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            formData.duration === duration.value
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="font-semibold">{duration.label}</div>
                          <div className="text-sm text-muted-foreground">₹{duration.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  </div>

                {/* Special Requests */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    placeholder="Any special requirements? Early morning pickup, specific temples, etc."
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="w-full min-h-[100px] px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Total & Submit */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-medium">Total Amount:</span>
                    <span className="text-3xl font-bold text-primary">₹{totalPrice}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="saffron" size="xl" className="flex-1">
                      <MessageCircle className="w-5 h-5" />
                      Book via WhatsApp
                    </Button>
                    <a href="tel:+917991301043" className="flex-1">
                      <Button type="button" variant="call" size="xl" className="w-full">
                        <Phone className="w-5 h-5" />
                        Call to Book
                      </Button>
                    </a>
                  </div>
                </div>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Scooter Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={scooterImage}
                  alt="Solo Scooter in Varanasi"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* What's Included */}
              <div className="bg-secondary rounded-3xl p-8">
                <h3 className="font-serif text-xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span>Electric scooter with full charge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span>Helmet and storage bag</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span>GPS navigation to all sacred sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span>24/7 WhatsApp support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span>Emergency roadside assistance</span>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-card rounded-3xl p-8 border border-border">
                <h3 className="font-serif text-xl font-bold mb-6">Need Help?</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/917991301043"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[hsl(142,70%,45%)]/10 hover:bg-[hsl(142,70%,45%)]/20 transition-colors"
                  >
                    <MessageCircle className="w-6 h-6 text-[hsl(142,70%,45%)]" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">Chat with us instantly</div>
                    </div>
                  </a>
                  <a
                    href="tel:+917991301043"
                    className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors"
                  >
                    <Phone className="w-6 h-6 text-accent" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-sm text-muted-foreground">+91 79913 01043</div>
                    </div>
                  </a>
                  <a
                    href="mailto:anshumanjha3333@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">anshumanjha3333@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookTour;
