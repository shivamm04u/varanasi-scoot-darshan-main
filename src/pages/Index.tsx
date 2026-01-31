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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <RouteItinerary />
      <Locations />
      <Testimonials />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
