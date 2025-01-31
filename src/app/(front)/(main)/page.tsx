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
      <Separator />
      <HistorySection textData={landingPageData.history} />
      <Separator />
      <HighlightsSection products={landingPageData.products} />
      <Separator />
      <LocationsSection locations={landingPageData.locations} />
    </div>
  );
};

export default Main;
