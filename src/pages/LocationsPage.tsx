import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";
import RouteItinerary from "@/components/RouteItinerary";

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Locations />
        <RouteItinerary />
      </main>
      <Footer />
    </div>
  );
};

export default LocationsPage;
