import React from "react";

export default function Content() {
  return (
    <div className="bg-[#C6BEAC] py-9 px-12 min-h-7 minWidth:[20px] flex flex-col justify-between items-end">
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="relative flex pb-0 justify-between items-end min-h-screen w-full">
      <div className="relative z-10 flex flex-col pb-0  items-start px-1 py-40 w-full">
        <div className="absolute top-0 right-0 pb-0 flex flex-col items-start p-2">
          <button className="text-black py- px-5 pr-30 lg:text-[3vw] md:text-[4.5vw] text-5xl font-mono font-light">
            ©2024 JANANI
          </button>
        </div>

        <h1 className="text-[18vw] leading-[0.8] lg:-[17vw] md:text-[17vw] xl:text-[15vw] mb-20 lg:mt-50 text-black items-end font-mono">
          thoguppu/
        </h1>
      </div>
    </div>
  );
};
