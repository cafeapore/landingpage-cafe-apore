import Image from "next/image";

const HistorySection = () => {
  return (
    <div className="max-w-6xl flex flex-col tablet:flex-row justify-center items-center w-full h-full flex-1 min-h-svh mx-auto p-10 tablet:px-0 gap-10">
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
          Lorem ipsum dolor sit amet. Aut dolores soluta est fuga sequi qui
          accusamus alias vel aliquid cupiditate. Eos odio ullam qui nihil
          accusamus in voluptatibus assumenda et dolores nostrum qui atque
          sequi. Ut aliquam quae aut natus laborum ea debitis eveniet vel quia
          harum. Vel cumque excepturi sit ducimus doloribus non nisi
          reprehenderit. Aut deleniti repellat qui facilis asperiores ut harum
          cumque et modi rerum aut veritatis esse aut iste accusamus sit
          deserunt repellat.
        </p>

        <p className="text-justify">
          Ex odit asperiores qui quis cupiditate aut blanditiis asperiores aut
          explicabo facilis id vitae magni. Ut voluptas dolor At porro dolor ut
          tempore corporis. Et optio molestias qui maiores quia id eligendi sint
          sit aliquam voluptatem est reprehenderit labore et consequuntur
          facilis 33 corrupti itaque. Ea consequatur rerum aut placeat maiores
          sit adipisci quia ut eaque voluptatibus cum nostrum quas Lorem ipsum
          dolor sit amet. Aut dolores soluta est fuga sequi qui accusamus alias
          vel aliquid cupiditate. Eos odio ullam qui nihil accusamus in
          voluptatibus assumenda et dolores nostrum qui atque sequi. Ut aliquam
          quae aut natus laborum ea debitis eveniet vel quia harum. Vel cumque
          excepturi sit ducimus doloribus non nisi reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default HistorySection;
