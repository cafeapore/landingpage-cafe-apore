const HeroSection = () => {
  return (
    <div
      className="w-full bg-ring/75 tablet:bg-ring/100 relative flex items-center justify-center  min-h-[calc(100svh-5rem)] overflow-x-hidden pt-20"
      id="hero"
    >
      <div className="tablet:max-w-6xl flex w-full items-center">
        <div className="px-10 py-5 mx-auto flex flex-col items-center justify-center h-full flex-1 text-background capitalize font-bold">
          {/* Title */}
          <p className="text-5xl tablet:text-6xl border-b-2 border-dashed pb-2 text-center tablet:text-end">
            O <span className="text-yellow-500">melhor</span> café da nossa{" "}
            <span className="text-yellow-500">região</span>
          </p>

          <p className="text-2xl tablet:text-4xl text-center tablet:text-end">
            Do <span className="text-yellow-500">cotidiano</span> ao{" "}
            <span className="text-yellow-500">100%</span> arábico
          </p>
        </div>

        {/* video mobile */}

        <video
          autoPlay
          loop
          muted
          className="absolute tablet:hidden tablet:static -z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/coffee-footage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* video desktop */}

        <div className="flex-1 min-h-[calc(100svh-5rem)] relative w-full hidden tablet:block">
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover z-10 top-0 left-0 rounded-tl-2xl"
          >
            <source src="/coffee-footage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* gradient*/}

          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-ring to-transparent h-full w-full z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
