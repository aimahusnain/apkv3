import React from "react";
import { Check } from "lucide-react";

const MyFeature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon?: any;
}) => {
  return (
    <div className="flex flex-col">
      <div className="mx-5 border-2 border-zinc-400 flex items-center justify-center aspect-square bg-black w-16 h-16 rounded-full text-primary relative top-7">
        {icon || <Check />}
      </div>
      <div className="flex flex-col bg-black border border-zinc-500 max-w-xs min-h-[270px] rounded-xl p-5 gap-3 pt-12">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className=" overflow-y-scroll max-h-[150px] text-md text-white/70">
          {description ||
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nulla, reprehenderit quisquam voluptates id corporis quidem corrupti asperiores sequi. Earum."}
        </p>
      </div>
    </div>
  );
};

export default MyFeature;
