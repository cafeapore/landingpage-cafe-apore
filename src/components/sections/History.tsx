import Image from "next/image";

const HistorySection = () => {
  return (
    <section
      className="max-w-6xl flex flex-col tablet:flex-row justify-center items-center w-full h-full flex-1 min-h-svh mx-auto p-10 tablet:px-0 gap-10"
      id="about"
    >
      <div className="h-full w-full flex-1 flex items-center justify-center">
        <Image
          alt="pic1"
          src="/pic-1.png"
          height={1000}
          width={1000}
          className="h-[70svh] tablet:h-[80svh] w-full object-cover rounded-lg"
        />
      </div>
      <div className="h-full w-full flex-1 space-y-5">
        <div className="font-bold text-5xl border-r-2 border-red-700 pr-2">
          <p className="text-end">Nossa</p>
          <p className="text-end">História</p>
        </div>

        <p className="text-justify">
          O Café Aporé tem suas raízes na tradição e na paixão pelo café.
          Fundada no início da década de 1960 por famílias tradicionais de
          Jales-SP, a empresa nasceu com o propósito de levar um café de
          qualidade superior à mesa dos brasileiros. Com o passar dos anos, a
          marca se consolidou no mercado e expandiu sua distribuição para mais
          de 100 cidades, sempre mantendo seu compromisso com a excelência.
        </p>

        <p className="text-justify">
          Há quase quatro décadas, o Café Aporé passou a ser administrado por
          uma nova gestão, que manteve viva a essência artesanal da torrefação,
          aliando inovação e tecnologia ao processo de produção. Hoje,
          utilizamos equipamentos de alta tecnologia para garantir um café de
          sabor inconfundível, preservando os aromas e características que fazem
          do nosso produto uma referência no segmento.
        </p>

        <p className="text-justify">
          Nosso compromisso com a qualidade é certificado pelo selo da
          Associação Brasileira da Indústria de Café (ABIC), garantindo que cada
          xícara de Café Aporé ofereça uma experiência única aos consumidores.
          Com respeito e dedicação, seguimos aprimorando nossos processos para
          levar o melhor café até você.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
