import React from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#032e15] text-white pt-20 pb-12 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col md:flex-row gap-20">
          <div>
            <span className="text-[42px] font-bold font-sans">GTG</span>
          </div>

          <div className="flex gap-16">
             <div className="flex flex-col gap-2">
                {["Home", "Shop", "Fragrances"].map(link => (
                   <a key={link} href="#" className="text-[14px] font-light font-oxanium hover:underline">{link}</a>
                ))}
             </div>
             <div className="flex flex-col gap-2">
                {["About Us", "Blog", "Contact"].map(link => (
                   <a key={link} href="#" className="text-[14px] font-light font-oxanium hover:underline">{link}</a>
                ))}
             </div>
             <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                   <div className="relative w-6 h-6"><Image src={ASSETS.img} alt="fb" fill /></div>
                   <span className="text-[14px] font-light font-oxanium">Facebook</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="relative w-6 h-6"><Image src={ASSETS.img1} alt="ig" fill /></div>
                   <span className="text-[14px] font-light font-oxanium">Instagram</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="relative w-6 h-6"><Image src={ASSETS.img2} alt="x" fill /></div>
                   <span className="text-[14px] font-light font-oxanium">X</span>
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-[500px]">
           <p className="text-[16px] font-bold text-[#fef3e4] font-sans">
             Join our newsletter to stay up to date on features and releases.
           </p>
           <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                 <div className="border border-white p-3 flex-1">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-transparent text-white placeholder-white/80 w-full outline-none font-light text-[16px] font-sans"
                    />
                 </div>
                 <button className="bg-[#653b09] text-white px-6 py-3 font-bold text-[16px] font-sans hover:bg-[#543107]">
                    Subscribe
                 </button>
              </div>
              <p className="text-[12px] font-light font-oxanium">
                By subscribing you agree to with our <u className="cursor-pointer">Privacy Policy</u> and provide consent to receive updates from our company.
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
};
