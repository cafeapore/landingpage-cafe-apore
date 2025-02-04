import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-svh flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  );
};

export default Loading;
