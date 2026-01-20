import React from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

const TableRow = ({ label, items }: { label: string; items: React.ReactNode[] }) => (
  <div className="grid grid-cols-5 gap-4 py-6 border-b border-gray-100 items-center">
    <div className="font-bold text-[#666] text-[16px] font-sans">{label}</div>
    {items.map((item, i) => (
      <div key={i} className="flex justify-center">
        {item}
      </div>
    ))}
  </div>
);

const CheckIcon = ({ src }: { src: string }) => (
  <Image src={src} alt="status" width={28} height={28} />
);

export const WhyGTG = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16 py-20 flex flex-col items-center">
      <div className="text-center mb-12">
         <p className="text-[40px] font-light text-[#032e15] font-oxanium mb-2">---</p>
         <h2 className="text-[36px] font-semibold text-[#032e15] font-sans">Why GTG is the #1 Choice</h2>
      </div>

      <div className="w-full max-w-[950px] relative">
         {/* GTG Highlight Background */}
         <div className="absolute top-0 left-[20%] w-[20%] h-full bg-[#f0fdf4] rounded-[15px] -z-10"></div>

         {/* Header Images */}
         <div className="grid grid-cols-5 gap-4 mb-8 items-end text-center">
            <div>
               <span className="font-bold text-[#322d2d] text-[16px] font-sans">Qualities</span>
            </div>
            {/* GTG */}
            <div className="flex flex-col items-center gap-4">
               <div className="relative w-24 h-24 rounded-[16px] overflow-hidden">
                  <Image src={ASSETS.imgPexelsPixabay2648701} alt="GTG" fill className="object-cover" />
               </div>
               <span className="text-[20px] font-light font-sans">GTG</span>
            </div>
            {/* Arose */}
            <div className="flex flex-col items-center gap-4">
               <div className="relative w-24 h-24 rounded-[16px] overflow-hidden opacity-80">
                  <Image src={ASSETS.imgPexelsRethaferguson30596092} alt="Arose" fill className="object-cover" />
               </div>
               <span className="text-[12px] text-[#666] font-light font-sans">Arose</span>
            </div>
            {/* Bella */}
            <div className="flex flex-col items-center gap-4">
               <div className="relative w-24 h-24 rounded-[16px] overflow-hidden opacity-80">
                  <Image src={ASSETS.imgPexelsValeriya19617821} alt="Bella" fill className="object-cover" />
               </div>
               <span className="text-[12px] text-[#666] font-light font-sans">Bella</span>
            </div>
            {/* Daisies */}
            <div className="flex flex-col items-center gap-4">
               <div className="relative w-24 h-24 rounded-[15px] overflow-hidden opacity-80">
                  <Image src={ASSETS.imgPexelsArtempodrez68011771} alt="Daisies" fill className="object-cover" />
               </div>
               <span className="text-[12px] text-[#666] font-light font-sans">Daisies</span>
            </div>
         </div>

         {/* Rows */}
         <TableRow 
            label="Longevity"
            items={[
               <CheckIcon key="1" src={ASSETS.imgFrame1000004036} />,
               <CheckIcon key="2" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="3" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="4" src={ASSETS.imgFrame1000004057} />
            ]}
         />
         <TableRow 
            label="Blend and Harmony"
            items={[
               <CheckIcon key="1" src={ASSETS.imgFrame1000004038} />,
               <CheckIcon key="2" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="3" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="4" src={ASSETS.imgFrame1000004043} />
            ]}
         />
         <TableRow 
            label="Skin Compatibility"
            items={[
               <CheckIcon key="1" src={ASSETS.imgFrame1000004038} />,
               <CheckIcon key="2" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="3" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="4" src={ASSETS.imgFrame1000004043} />
            ]}
         />
         <TableRow 
            label="Price vs. Quality"
            items={[
               <CheckIcon key="1" src={ASSETS.imgFrame1000004038} />,
               <CheckIcon key="2" src={ASSETS.imgFrame1000004057} />,
               <CheckIcon key="3" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="4" src={ASSETS.imgFrame1000004057} />
            ]}
         />
         <TableRow 
            label="Sillage"
            items={[
               <CheckIcon key="1" src={ASSETS.imgFrame1000004037} />,
               <CheckIcon key="2" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="3" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="4" src={ASSETS.imgFrame1000004043} />
            ]}
         />
         <TableRow 
            label="Scent Profile"
            items={[
               <CheckIcon key="1" src={ASSETS.imgFrame1000004038} />,
               <CheckIcon key="2" src={ASSETS.imgFrame1000004057} />,
               <CheckIcon key="3" src={ASSETS.imgFrame1000004043} />,
               <CheckIcon key="4" src={ASSETS.imgFrame1000004043} />
            ]}
         />
         <TableRow 
            label="Potency Concentration"
            items={[
               <span key="1" className="font-light text-[#666] font-sans">10x</span>,
               <span key="2" className="font-light text-[#666] font-sans">1x</span>,
               <span key="3" className="font-light text-[#666] font-sans">1x</span>,
               <span key="4" className="font-light text-[#666] font-sans">10x</span>
            ]}
         />
         <TableRow 
            label="Bottle Design Score"
            items={[
               <span key="1" className="font-light text-[#666] font-sans">9</span>,
               <span key="2" className="font-light text-[#666] font-sans">5</span>,
               <span key="3" className="font-light text-[#666] font-sans">6</span>,
               <span key="4" className="font-light text-[#666] font-sans">2</span>
            ]}
         />
      </div>

      <div className="mt-12">
        <button className="bg-gradient-to-b from-[#032e15] to-[#016630] text-white px-8 py-3 rounded-full font-medium text-[20px] hover:opacity-90 transition-opacity">
          Try It Risk-Free
        </button>
      </div>
    </div>
  );
};
