"use server";
import { getLandingPageData } from "@/actions/landingPage/getData";
import NavbarScroll from "@/components/landingPage/NavbarScroll";
import HeroSection from "@/components/landingPage/sections/Hero";
import HighlightsSection from "@/components/landingPage/sections/Highlights";
import HistorySection from "@/components/landingPage/sections/History";
import LocationsSection from "@/components/landingPage/sections/locations";
import { Separator } from "@/components/ui/separator";
import { revalidatePath } from "next/cache";

const Main = async () => {
  const landingPageData = await getLandingPageData();

  revalidatePath("/");

  return (
    <div>
      <NavbarScroll />
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
