import React from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

export const Hero = () => {
  return (
    <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={ASSETS.imgImageFx121}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute top-1/2 left-4 sm:left-[5%] md:left-[74px] -translate-y-1/2 max-w-[90%] sm:max-w-[692px] flex flex-col gap-6 md:gap-10">
        <div className="flex flex-col gap-4 md:gap-7 items-start">
          <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] border border-white/50 backdrop-blur-sm">
            <Image src={ASSETS.imgMedal} alt="Medal" width={20} height={20} className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-white text-[12px] sm:text-[14px] md:text-[16px] font-light font-sans">
              Awarded the best perfume in the world
            </span>
          </div>

          <h1 className="text-[#032e15] text-[32px] sm:text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight font-sans">
            Live your best life.
          </h1>
        </div>

        <div className="flex gap-6 sm:gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-1 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
            <span className="text-[40px] sm:text-[56px] md:text-[72px] font-bold bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] bg-clip-text text-transparent leading-[0.9] font-sans">
              10x
            </span>
            <span className="text-[#0d542b] text-[14px] sm:text-[18px] md:text-[22px] font-light font-sans leading-tight">power</span>
          </div>
          <div className="flex flex-col gap-1 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
            <span className="text-[40px] sm:text-[56px] md:text-[72px] font-bold bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] bg-clip-text text-transparent leading-[0.9] font-sans">
              9
            </span>
            <span className="text-[#0d542b] text-[14px] sm:text-[18px] md:text-[22px] font-light font-sans leading-tight">ingredients</span>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px] sm:min-w-[120px] md:min-w-[150px]">
            <span className="text-[40px] sm:text-[56px] md:text-[72px] font-bold bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] bg-clip-text text-transparent leading-[0.9] font-sans">
              20K+
            </span>
            <span className="text-[#0d542b] text-[14px] sm:text-[18px] md:text-[22px] font-light font-sans leading-tight whitespace-nowrap">happy customers</span>
          </div>
        </div>

<div className="mb-24">
        <button className="bg-gradient-to-b from-[#032e15] to-[#016630] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg font-medium text-[14px] sm:text-[16px] md:text-[18px] hover:opacity-90 transition-opacity w-fit cursor-pointer">
          Shop Now
        </button>
        </div>
      </div>
    </div>
  );
};
