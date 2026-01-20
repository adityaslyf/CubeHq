import React from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 px-4 md:px-16 py-4 flex justify-center items-center">
      <div className="flex items-center justify-between w-full max-w-[1440px]">
        {/* Logo */}
        <div className="relative">
          <p
            className="text-[30px] font-extrabold bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] bg-clip-text text-transparent font-sans leading-normal"
          >
            GTG
          </p>
        </div>

        {/* Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-8 items-center">
            {["Home", "Shop", "Fragrances", "About Us", "Blog", "Contact"].map((link) => (
              <div key={link} className="flex items-center gap-1 group cursor-pointer">
                <span className="text-[#162456] text-[16px] font-normal font-sans leading-normal">
                  {link}
                </span>
                {link === "Shop" && (
                   <Image 
                     src={ASSETS.imgChevronDown} 
                     alt="chevron" 
                     width={24} 
                     height={24}
                     className="w-6 h-6"
                   />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="relative w-[38px] h-[38px] flex items-center justify-center cursor-pointer">
             <Image 
               src={ASSETS.imgX32MagnifyingGlass} 
               alt="search" 
               width={24} 
               height={24}
               className="w-6 h-6"
             />
          </div>
          <button className="bg-gradient-to-b from-[#032e15] to-[#016630] text-white px-7 py-4 rounded-full font-medium text-[18px] hover:opacity-90 transition-opacity">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};
