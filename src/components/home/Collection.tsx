"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

const AccordionItem = ({ title, isOpen, onClick }: { title: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className={`border border-[#cdcdcd] rounded-lg overflow-hidden transition-all ${isOpen ? 'bg-white' : 'bg-white'}`}>
      <div
        className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-[16px] md:text-[20px] font-bold text-[#032e15] font-sans">{title}</span>
        <div className="relative w-5 h-5 md:w-6 md:h-6">
           <Image
             src={isOpen ? ASSETS.imgIcBaselineMinus11 : ASSETS.imgIcBaselinePlus52}
             alt={isOpen ? "collapse" : "expand"}
             fill
           />
        </div>
      </div>
      {isOpen && (
        <div className="px-4 md:px-8 pb-4 md:pb-6">
          <p className="text-[14px] md:text-[16px] font-light text-[#666] leading-relaxed font-sans">
            Discover our curated line of signature perfumes, designed to become your daily companion.
          </p>
        </div>
      )}
    </div>
  );
};

export const Collection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
           <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#032e15] font-sans">Our Collection</h2>
           <div className="flex flex-col gap-3 md:gap-4 w-full">
              {[0, 1, 2, 3].map((i) => (
                <AccordionItem
                  key={i}
                  title="Signature Scents"
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(i)}
                />
              ))}
           </div>
        </div>
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[712px] relative rounded-[14px] overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-white to-black">
              <Image
                src={ASSETS.imgVerticalShotGillsEdibleMushrooms1}
                alt="collection-bg"
                fill
                className="object-cover opacity-80"
              />
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[85%] md:h-[90%] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl">
              <Image
                src={ASSETS.imgPexelsCottonbro46597931}
                alt="collection-highlight"
                fill
                className="object-cover"
              />
           </div>
        </div>
      </div>
    </div>
  );
};
