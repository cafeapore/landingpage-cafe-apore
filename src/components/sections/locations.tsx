import Image from "next/image";

const LocationsSection = () => {
  return (
    <div
      className="max-w-6xl flex flex-col tablet:flex-row justify-center items-center w-full h-full flex-1 min-h-svh mx-auto p-10 tablet:px-0 gap-10"
      id="provinces"
    >
      <div className="h-full w-full flex-1 flex items-center justify-center">
        <Image
          alt="pic1"
          src="/map.png"
          height={1000}
          width={1000}
          className="h-[70svh] tablet:h-[80svh] w-full object-contain rounded-lg"
        />
      </div>

      <div className="h-full w-full flex-1 space-y-5">
        <div className="font-bold text-5xl border-x-2 tablet:border-l-0 border-red-700 pr-2">
          <p className="text-center tablet:text-end">Regiões Onde</p>
          <p className="text-center tablet:text-end">Servimos</p>
        </div>

        <div className="grid grid-cols-2 text-xl">
          <p className="text-center tablet:text-end">Santa Fé Do Sul</p>
          <p className="text-center tablet:text-end">Jales-SP</p>
          <p className="text-center tablet:text-end">Votuporanga-SP</p>
          <p className="text-center tablet:text-end">Fernandópolis</p>
          <p className="text-center tablet:text-end">Araçatuba-SP</p>
          <p className="text-center tablet:text-end">Iturama-MG</p>
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;
