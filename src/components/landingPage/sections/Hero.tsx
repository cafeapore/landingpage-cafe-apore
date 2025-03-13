"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const HeroSection = ({
  videoUrl,
  storeUrl,
}: {
  videoUrl: string;
  storeUrl: string;
}) => {
  return (
    <section className="w-full bg-ring/75 tablet:bg-ring/100 relative flex items-center justify-center  overflow-hidden min-h-[calc(100svh-6rem)]">
      <div className="tablet:max-w-6xl flex w-full items-center">
        {/* Arrow Down */}
        <ArrowDown
          className="absolute bottom-5 right-0 left-0 mx-auto text-background animate-bounce z-50 font-bold"
          size={60}
        />

        <div className="px-10 gap-2 py-5 flex flex-col items-center justify-center h-full flex-1 text-background capitalize font-bold z-10 max-w-[700px]">
          {/* Title */}
          <p className="text-4xl tablet:text-6xl border-b-2 border-dashed pb-5 text-center tablet:text-start">
            Café Aporé O Sabor do melhor café
          </p>

          <p className="text-xl tablet:text-4xl text-center tablet:text-end">
            {/* Sub Título */}
          </p>

          <p className="font-normal normal-case text-center tablet:text-start">
            Desde 1962 unindo qualidade e produção, entregando produtos que
            figuram entre os melhores do interior de São Paulo.
          </p>

          <div className="mt-4 flex justify-center tablet:justify-start gap-5 w-full">
            <Link href="/blog">
              <Button className="bg-yellow-500 hover:bg-yellow-600 hover:text-ring min-w-32">
                Notícias
              </Button>
            </Link>

            <Link href="https://loja.cafeapore.com.br" target="_blank">
              <Button
                variant="outline"
                className="text-ring font-semibold min-w-32"
              >
                Loja
              </Button>
            </Link>
          </div>
        </div>

        {/* video mobile */}

        <video
          autoPlay
          loop
          muted
          className="absolute w-auto min-w-full min-h-full max-w-none left-0 top-0 opacity-75"
          height={1990}
          width={1080}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
