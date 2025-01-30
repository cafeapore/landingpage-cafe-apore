import HeroSection from "@/components/sections/Hero";
import HighlightsSection from "@/components/sections/Highlights";
import HistorySection from "@/components/sections/History";
import LocationsSection from "@/components/sections/locations";
import { Separator } from "@/components/ui/separator";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <HistorySection />
      <Separator />
      <HighlightsSection />
      <LocationsSection />
    </div>
  );
};

export default Main;
