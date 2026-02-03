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
      {/* Pass content to components if needed */}
      <Header />
      
      {/* Dynamic Hero: Pass title/subtitle if available */}
      <Hero 
        customTitle={content?.heroTitle} 
        customSubtitle={content?.heroSubtitle} 
      />
      
      <About />
      <WhyChoose />
      
      {/* Dynamic Services: Pass updated prices */}
      <Services 
        pkg1Price={content?.pkg1Price} 
        pkg2Price={content?.pkg2Price} 
        pkg3Price={content?.pkg3Price}
      />
      
      <RouteItinerary />
      <Locations />
      <Testimonials />
      
      {/* Dynamic Footer Contact Info */}
      <Footer 
        phone={content?.contact?.phone} 
        email={content?.contact?.email} 
      />
      
      <FloatingCTA />
    </div>
  );
};

export default Index;
