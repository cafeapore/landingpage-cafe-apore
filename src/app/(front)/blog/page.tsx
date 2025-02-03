import { getMainNewsData } from "@/actions/news/getMainNews";
import MainNewsCard from "@/components/blog/MainNewsCard";
import NewsCard from "@/components/blog/NewsCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogPage = async () => {
  const mainNews = await getMainNewsData();

  console.log(mainNews.image);

  return (
    <div className="min-h-[calc(100svh-10rem)] w-full py-5 h-full flex items-center">
      <div className="max-w-screen-desktop mx-auto h-full w-full flex items-center justify-center flex-col gap-5 px-5">
        <p className="text-center text-2xl font-semibold text-ring">
          Últimas Notícias
        </p>

        <div className="flex flex-col items-start tablet:flex-row gap-10 h-full">
          <MainNewsCard data={mainNews} />

          <Separator className="block tablet:hidden" />

          <div className="flex-1 space-y-2">
            <NewsCard />
            <NewsCard />
            <NewsCard />

            <Separator />

            <div className="flex  justify-around tablet:justify-end w-full gap-5">
              <Button className="px-10 tablet:px-4">
                <ChevronLeft />
              </Button>

              <Button className="px-10 tablet:px-4">
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
