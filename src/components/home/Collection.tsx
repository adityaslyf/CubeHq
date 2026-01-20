"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

const AccordionItem = ({ title, isOpen, onClick }: { title: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className={`border border-[#cdcdcd] rounded-lg overflow-hidden transition-all ${isOpen ? 'bg-white' : 'bg-white'}`}>
      <div 
        className="flex justify-between items-center px-8 py-6 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-[20px] font-bold text-[#032e15] font-sans">{title}</span>
        <div className="relative w-6 h-6">
           <Image 
             src={isOpen ? ASSETS.imgIcBaselineMinus11 : ASSETS.imgIcBaselinePlus52} 
             alt={isOpen ? "collapse" : "expand"} 
             fill
           />
        </div>
      </div>
      {isOpen && (
        <div className="px-8 pb-6">
          <p className="text-[16px] font-light text-[#666] leading-relaxed font-sans">
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
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
           <h2 className="text-[36px] font-semibold text-[#032e15] font-sans">Our Collection</h2>
           <div className="flex flex-col gap-4 w-full">
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

        <div className="w-full lg:w-1/2 h-[712px] relative rounded-[14px] overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-white to-black">
              <Image 
                src={ASSETS.imgVerticalShotGillsEdibleMushrooms1} 
                alt="collection-bg" 
                fill 
                className="object-cover opacity-80"
              />
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90%] rounded-[30px] overflow-hidden shadow-2xl">
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
