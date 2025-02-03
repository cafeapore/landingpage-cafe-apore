import { getNewsBySlug } from "@/actions/news/getNewsBySlug";
import { RichText } from "@payloadcms/richtext-lexical/react";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

const NewsPage = async ({ params }: NewsPageProps) => {
  const rParams = await params;

  const { docs } = await getNewsBySlug({ slug: rParams.slug });

  if (!docs.length) {
    return (
      <div className="h-[calc(100svh-19rem)] tablet:h-[calc(100svh-10rem)] flex items-center justify-center">
        <p>Notícia não encontrada</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-desktop mx-auto px-5">
      <p className="text-2xl font-semibold">{docs[0].title}</p>
      <RichText data={docs[0].content} />
    </div>
  );
};

export default NewsPage;
