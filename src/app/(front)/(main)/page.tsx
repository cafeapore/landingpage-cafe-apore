"use server";
import { getLandingPageData } from "@/actions/landingPage/getData";
import NavbarScroll from "@/components/landingPage/NavbarScroll";
import HeroSection from "@/components/landingPage/sections/Hero";
import HighlightsSection from "@/components/landingPage/sections/Highlights";
import HistorySection from "@/components/landingPage/sections/History";
import { Separator } from "@/components/ui/separator";

const Main = async () => {
  const landingPageData = await getLandingPageData();

  return (
    <div>
      <NavbarScroll />
      <HeroSection
        videoUrl={landingPageData.heroVideo}
        storeUrl={process.env.URL_STORE!}
      />
      <Separator />
      <HighlightsSection products={landingPageData.products} />
      <Separator />
      <HistorySection textData={landingPageData.history} />
      {/* <Separator /> */}
      {/* <LocationsSection locations={landingPageData.locations} /> */}
    </div>
  );
};

export default Main;
