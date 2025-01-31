import Image from "next/image";

const NewsCard = () => {
  return (
    <div className="flex gap-2">
      <Image
        src="/pic-1.png"
        alt="Imagem Notícia"
        height={1000}
        width={1000}
        className="min-w-40 max-h-52 rounded object-cover"
      />

      <div>
        <p className="font-semibold text-ring">Título Notícia</p>
        <p className="text-sm text-justify text-ring">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tristique accumsan vestibulum. Aliquam laoreet ac tellus non
          hendrerit. Phasellus sed commodo urna, quis aliquam odio. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
