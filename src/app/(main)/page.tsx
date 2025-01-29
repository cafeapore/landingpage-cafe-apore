import HeroSection from "@/components/sections/Hero";
import HighlightsSection from "@/components/sections/Highlights";
import HistorySection from "@/components/sections/History";
import { Separator } from "@/components/ui/separator";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <HistorySection />
      <Separator />
      <HighlightsSection />
    </div>
  );
};

export default Main;
