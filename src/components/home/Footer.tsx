"use client";
import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { ASSETS } from "./assets";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Successfully subscribed to our newsletter! 🎉", {
      duration: 4000,
      style: {
        background: '#032e15',
        color: '#fff',
      },
    });
    
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#032e15] text-white pt-12 md:pt-20 pb-8 md:pb-12 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-20 w-full lg:w-auto">
          <div>
            <span className="text-[32px] md:text-[42px] font-bold font-sans">GTG</span>
          </div>

          <div className="flex gap-8 sm:gap-12 md:gap-16 flex-wrap">
             <div className="flex flex-col gap-2">
                {["Home", "Shop", "Fragrances"].map(link => (
                   <a key={link} href="#" className="text-[13px] md:text-[14px] font-light font-oxanium hover:underline cursor-pointer">{link}</a>
                ))}
             </div>
             <div className="flex flex-col gap-2">
                {["About Us", "Blog", "Contact"].map(link => (
                   <a key={link} href="#" className="text-[13px] md:text-[14px] font-light font-oxanium hover:underline cursor-pointer">{link}</a>
                ))}
             </div>
             <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                   <div className="relative w-5 h-5 md:w-6 md:h-6"><Image src={ASSETS.img} alt="fb" fill /></div>
                   <span className="text-[13px] md:text-[14px] font-light font-oxanium">Facebook</span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                   <div className="relative w-5 h-5 md:w-6 md:h-6"><Image src={ASSETS.img1} alt="ig" fill /></div>
                   <span className="text-[13px] md:text-[14px] font-light font-oxanium">Instagram</span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                   <div className="relative w-5 h-5 md:w-6 md:h-6"><Image src={ASSETS.img2} alt="x" fill /></div>
                   <span className="text-[13px] md:text-[14px] font-light font-oxanium">X</span>
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:max-w-[500px]">
           <p className="text-[14px] md:text-[16px] font-bold text-[#fef3e4] font-sans">
             Join our newsletter to stay up to date on features and releases.
           </p>
           <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                 <div className="border border-white p-3 flex-1">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email" 
                      className="bg-transparent text-white placeholder-white/80 w-full outline-none font-light text-[14px] md:text-[16px] font-sans"
                    />
                 </div>
                 <button 
                   type="submit"
                   className="bg-[#653b09] text-white px-6 py-3 font-bold text-[14px] md:text-[16px] font-sans hover:bg-[#543107] transition-colors cursor-pointer"
                 >
                    Subscribe
                 </button>
              </div>
              <p className="text-[11px] md:text-[12px] font-light font-oxanium">
                By subscribing you agree to with our <u className="cursor-pointer">Privacy Policy</u> and provide consent to receive updates from our company.
              </p>
           </form>
        </div>
      </div>
    </footer>
  );
};
