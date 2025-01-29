import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-ring">
      <div className="w-full mx-auto max-w-desktop px-10 py-5 text-background flex justify-between items-center flex-col tablet:flex-row">
        <Image
          alt="Logo"
          src="/logo.png"
          height={300}
          width={300}
          className="h-10 w-auto"
        />

        <div className="text-xs text-center tablet:text-start">
          <p>Torrefacao e Moagem de Cafe Apore LTDA - 50.544.923/0001-82</p>

          <p>
            Avenida Marginal Aureo Fernandes de Faria, 1231, Parque Industrial
            II, Jales-SP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
