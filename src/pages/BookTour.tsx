import { useState, useEffect } from "react";
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
import { Phone, MessageCircle, MapPin, User, CheckCircle2, Lock, X } from "lucide-react";
import scooterImage from "@/assets/scooter-varanasi.jpg";
import { useToast } from "@/hooks/use-toast";

// FIREBASE IMPORTS
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// EMAIL SERVICE (You need to install: npm install @emailjs/browser)
import emailjs from '@emailjs/browser'; 

// CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyCtyR68dG9TEI_C89PvsdrGmpkE6vCtV0s",
  authDomain: "varanasi-scoot-darshan.firebaseapp.com",
  projectId: "varanasi-scoot-darshan",
  storageBucket: "varanasi-scoot-darshan.firebasestorage.app",
  messagingSenderId: "437910870938",
  appId: "1:437910870938:web:cb7b3043bcc39216143823"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const locations = [
  { value: "kashi-vishwanath", label: "Kashi Vishwanath Temple" },
  { value: "dashashwamedh", label: "Dashashwamedh Ghat" },
  { value: "manikarnika", label: "Manikarnika Ghat" },
  { value: "assi-ghat", label: "Assi Ghat" },
  { value: "airport", label: "Lal Bahadur Shastri Airport" },
  { value: "cantt", label: "Varanasi Cantt Station" },
];

const durations = [
  { value: "6", label: "Half Day", price: 999 },
  { value: "12", label: "Full Day (8 AM - 8 PM)", price: 1999 },
];

const BookTour = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showLoginModal, setShowLoginModal] = useState(false); // State for Login Popup
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupLocation: "",
    duration: "12",
    date: "",
    specialRequests: "",
    saveDetails: true
  });

  // Check Login Status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setFormData(prev => ({
          ...prev,
          name: currentUser.displayName || prev.name,
          email: currentUser.email || prev.email
        }));
      }
    });
    return () => unsubscribe();
  }, []);

  const selectedDuration = durations.find(d => d.value === formData.duration);
  const totalPrice = selectedDuration?.price || 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. LOGIN CHECK (Strict Mode)
    if (!user) {
      setShowLoginModal(true);
      return; // STOP HERE if not logged in
    }

    setLoading(true);
    
    try {
      // 2. SAVE TO FIREBASE (Notify Manager/Admin via Dashboard)
      await addDoc(collection(db, "bookings"), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        pickupLocation: locations.find(l => l.value === formData.pickupLocation)?.label || 'Not selected',
        tourPackage: selectedDuration?.label,
        totalPrice: totalPrice,
        date: formData.date,
        specialRequests: formData.specialRequests,
        userId: user.uid,
        status: 'pending', // Manager sees this in Live Queue
        assignedDriver: 'unassigned',
        createdAt: new Date().toISOString(),
        source: 'Website'
      });

      // 3. SEND EMAIL NOTIFICATION (Optional: Requires EmailJS setup)
      // Uncomment and add your keys from emailjs.com
      /*
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_name: formData.name,
          to_email: formData.email,
          message: `Booking Confirmed for ${formData.date}. Amount: ₹${totalPrice}`
        },
        'YOUR_PUBLIC_KEY'
      );
      */

      // 4. OPEN WHATSAPP (Final Step)
      const message = `🛵 *Baba Banarasi Booking*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *Pickup:* ${locations.find(l => l.value === formData.pickupLocation)?.label || 'Not selected'}
⏱️ *Duration:* ${selectedDuration?.label}
📅 *Date:* ${formData.date}
💰 *Total:* ₹${totalPrice}

${formData.specialRequests ? `📝 *Note:* ${formData.specialRequests}` : ''}

🙏 Har Har Mahadev!`;

      window.open(`https://wa.me/917991301043?text=${encodeURIComponent(message)}`, '_blank');

      toast({
        title: "Booking Successful!",
        description: "Manager notified. Opening WhatsApp...",
      });

    } catch (error) {
      console.error("Error:", error);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solo Scooter <span className="gradient-text">Darshan Booking</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill in your details. Login required to ensure secure booking.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Details */}
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" /> Personal Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input name="name" placeholder="Enter name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone/WhatsApp *</Label>
                      <Input name="phone" type="tel" placeholder="+91..." value={formData.phone} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input name="email" type="email" placeholder="email@example.com" value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>

                {/* Tour Details */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="font-serif text-xl font-bold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Tour Details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Pickup Location *</Label>
                      <Select value={formData.pickupLocation} onValueChange={(v) => handleSelectChange("pickupLocation", v)}>
                        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          {locations.map((l) => <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Date *</Label>
                      <Input name="date" type="date" value={formData.date} onChange={handleInputChange} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Duration *</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {durations.map((d) => (
                        <button key={d.value} type="button" onClick={() => handleSelectChange("duration", d.value)}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${formData.duration === d.value ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>
                          <div className="font-semibold">{d.label}</div>
                          <div className="text-sm text-muted-foreground">₹{d.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <Label>Special Requests</Label>
                  <textarea name="specialRequests" placeholder="Any specific needs?" value={formData.specialRequests} onChange={handleInputChange} className="w-full min-h-[80px] px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none" />
                </div>

                {/* --- SAVE DETAILS BOX (Inserted Here as Requested) --- */}
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 mt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        id="saveInfo"
                        checked={formData.saveDetails}
                        onChange={(e) => setFormData(prev => ({...prev, saveDetails: e.target.checked}))}
                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-primary bg-white checked:bg-primary transition-all"
                      />
                      <CheckCircle2 className="pointer-events-none absolute h-3.5 w-3.5 left-1 top-1 text-white opacity-0 peer-checked:opacity-100" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-foreground">Save my details for next time</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        We will send booking confirmation to <b>{formData.email || 'your email'}</b>.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Total & Submit */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-medium">Total Amount:</span>
                    <span className="text-3xl font-bold text-primary">₹{totalPrice}</span>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" disabled={loading} variant="saffron" size="xl" className="w-full">
                      {loading ? 'Processing...' : (
                        <><MessageCircle className="w-5 h-5 mr-2" /> Book via WhatsApp</>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-lg"><img src={scooterImage} alt="Scooter" className="w-full h-64 object-cover" /></div>
              <div className="bg-secondary rounded-3xl p-8">
                <h3 className="font-serif text-xl font-bold mb-6">Included</h3>
                <ul className="space-y-3">
                  {['Electric Scooter', 'Helmet & Bag', 'GPS Guide', '24/7 Support'].map((item, i) => (
                    <li key={i} className="flex gap-3"><span className="text-primary">✓</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* --- LOGIN POPUP MODAL --- */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl relative border-2 border-orange-100">
            <button onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X size={24} /></button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Login Required</h3>
              <p className="text-gray-600 mb-6">To ensure secure bookings and tracking, please login or create an account first.</p>
              
              <a href="/dashboard/login.html" className="block w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all">
                Login / Sign Up Now
              </a>
              
              <button onClick={() => setShowLoginModal(false)} className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BookTour;
