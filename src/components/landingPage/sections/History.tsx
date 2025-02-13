import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

const HistorySection = ({ textData }: { textData: SerializedEditorState }) => {
  return (
    <section
      className="max-w-6xl flex flex-col tablet:flex-row justify-center items-center w-full h-full flex-1 min-h-svh mx-auto p-10 tablet:px-0 gap-10"
      id="about"
    >
      <div className="h-full w-full flex-1 flex items-center justify-center">
        <Image
          alt="pic1"
          src="/pic-1.jpg"
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

        <RichText data={textData} />
      </div>
    </section>
  );
};

export default HistorySection;
