import React from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

export const Hero = () => {
  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={ASSETS.imgImageFx121}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute top-1/2 left-[5%] md:left-[74px] -translate-y-1/2 max-w-[692px] flex flex-col gap-10">
        <div className="flex flex-col gap-7 items-start">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] border border-white/50 backdrop-blur-sm">
            <Image src={ASSETS.imgMedal} alt="Medal" width={24} height={24} className="w-6 h-6" />
            <span className="text-white text-[16px] font-light font-sans">
              Awarded the best perfume in the world
            </span>
          </div>

          <h1 className="text-[#032e15] text-[56px] font-bold leading-[1.1] tracking-tight font-sans">
            Live your best life.
          </h1>
        </div>

        <div className="flex gap-6 items-start">
          <div className="flex flex-col gap-1 w-[150px]">
            <span className="text-[72px] font-bold bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] bg-clip-text text-transparent leading-[1] font-sans">
              10x
            </span>
            <span className="text-[#0d542b] text-[22px] font-light font-sans">power</span>
          </div>
          <div className="flex flex-col gap-1 w-[150px]">
            <span className="text-[72px] font-bold bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] bg-clip-text text-transparent leading-[1] font-sans">
              9
            </span>
            <span className="text-[#0d542b] text-[22px] font-light font-sans">ingredients</span>
          </div>
          <div className="flex flex-col gap-1 w-[150px]">
            <span className="text-[72px] font-bold bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] bg-clip-text text-transparent leading-[1.2] font-sans pt-2 pb-1 block">
              20K+
            </span>
            <span className="text-[#0d542b] text-[22px] font-light font-sans">happy customers</span>
          </div>
        </div>

        <button className="bg-gradient-to-b from-[#032e15] to-[#016630] text-white px-8 py-3 rounded-full shadow-lg font-medium text-[18px] hover:opacity-90 transition-opacity w-fit">
          Shop Now
        </button>
      </div>
    </div>
  );
};
