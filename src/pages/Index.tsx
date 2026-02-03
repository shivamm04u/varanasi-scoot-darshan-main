import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import RouteItinerary from "@/components/RouteItinerary";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

// Firebase Imports
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

const Index = () => {
  const [content, setContent] = useState<any>(null);

  // Fetch Data from Manager Panel
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "settings", "website"), (doc) => {
      if (doc.exists()) {
        setContent(doc.data());
      }
    });
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* FIXED: Props now match Hero.tsx (title, subtitle, etc.) */}
      <Hero 
        title={content?.heroTitle} 
        subtitle={content?.heroSubtitle}
        description={content?.heroText}
        price={content?.heroPrice}
      />
      
      <About />
      <WhyChoose />
      
      {/* FIXED: Props now match Services.tsx (scooterPrice, boatPrice) */}
      <Services 
        scooterPrice={content?.pkg1Price} 
        boatPrice={content?.pkg2Price} 
      />
      
      <RouteItinerary />
      <Locations />
      <Testimonials />
      
      {/* Footer can accept dynamic contact info */}
      <Footer />
      
      <FloatingCTA />
    </div>
  );
};

export default Index;
