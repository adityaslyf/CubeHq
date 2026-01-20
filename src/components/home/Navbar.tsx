"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50 px-4 md:px-8 lg:px-16 py-4">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <div className="relative">
          <p className="text-[24px] md:text-[30px] font-extrabold bg-gradient-to-b from-[rgba(3,46,21,0.6)] to-[rgba(1,102,48,0.6)] bg-clip-text text-transparent font-sans leading-normal">
            GTG
          </p>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex gap-6 xl:gap-8 items-center">
            {["Home", "Shop", "Fragrances", "About Us", "Blog", "Contact"].map((link) => (
              <div key={link} className="flex items-center gap-1 group cursor-pointer">
                <span className="text-[#162456] text-[14px] xl:text-[16px] font-normal font-sans leading-normal hover:text-[#032e15] transition-colors">
                  {link}
                </span>
                {link === "Shop" && (
                  <Image
                    src={ASSETS.imgChevronDown}
                    alt="chevron"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative w-[32px] h-[32px] md:w-[38px] md:h-[38px] flex items-center justify-center cursor-pointer">
            <Image
              src={ASSETS.imgX32MagnifyingGlass}
              alt="search"
              width={20}
              height={20}
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
          <button className="hidden sm:block bg-gradient-to-b from-[#032e15] to-[#016630] text-white px-4 md:px-7 py-2 md:py-4 rounded-full font-medium text-[14px] md:text-[18px] hover:opacity-90 transition-opacity">
            Shop Now
          </button>

          <button
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#032e15] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#032e15] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#032e15] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 py-4">
          <div className="flex flex-col gap-4 px-4">
            {["Home", "Shop", "Fragrances", "About Us", "Blog", "Contact"].map((link) => (
              <div key={link} className="flex items-center justify-between py-2 cursor-pointer border-b border-gray-100">
                <span className="text-[#162456] text-[16px] font-normal font-sans">
                  {link}
                </span>
                {link === "Shop" && (
                  <Image
                    src={ASSETS.imgChevronDown}
                    alt="chevron"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                )}
              </div>
            ))}
            <button className="sm:hidden bg-gradient-to-b from-[#032e15] to-[#016630] text-white px-6 py-3 rounded-full font-medium text-[16px] hover:opacity-90 transition-opacity w-full mt-2">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
