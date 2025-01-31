"use server";
import { getLandingPageData } from "@/actions/landingPage/getData";
import HeroSection from "@/components/sections/Hero";
import HighlightsSection from "@/components/sections/Highlights";
import HistorySection from "@/components/sections/History";
import LocationsSection from "@/components/sections/locations";
import { Separator } from "@/components/ui/separator";

const Main = async () => {
  const landingPageData = await getLandingPageData();

  return (
    <div>
      <HeroSection videoUrl={landingPageData.heroVideo} />
      <HistorySection textData={landingPageData.history} />
      <Separator />
      <HighlightsSection />
      <Separator />
      <LocationsSection />
    </div>
  );
};

export default Main;
