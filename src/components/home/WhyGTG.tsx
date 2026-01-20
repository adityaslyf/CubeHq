import React from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

const TableRow = ({ label, items }: { label: string; items: React.ReactNode[] }) => (
  <div className="grid grid-cols-5 gap-2 md:gap-4 py-4 md:py-6 border-b border-gray-100 items-center min-w-[600px]">
    <div className="font-bold text-[#666] text-[12px] md:text-[16px] font-sans">{label}</div>
    {items.map((item, i) => (
      <div key={i} className="flex justify-center">
        {item}
      </div>
    ))}
  </div>
);

const CheckIcon = ({ src }: { src: string }) => (
  <Image src={src} alt="status" width={20} height={20} className="md:w-7 md:h-7" />
);

export const WhyGTG = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-20 flex flex-col items-center">
      <div className="text-center mb-8 md:mb-12">
         <p className="text-[28px] md:text-[40px] font-light text-[#032e15] font-oxanium mb-2">---</p>
         <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-[#032e15] font-sans">Why GTG is the #1 Choice</h2>
      </div>

      <div className="w-full overflow-x-auto pb-4">
        <div className="w-full max-w-[950px] mx-auto relative min-w-[600px]">
         <div className="absolute top-0 left-[20%] w-[20%] h-full bg-[#f0fdf4] rounded-[10px] md:rounded-[15px] -z-10"></div>

         <div className="grid grid-cols-5 gap-2 md:gap-4 mb-6 md:mb-8 items-end text-center min-w-[600px]">
            <div>
               <span className="font-bold text-[#322d2d] text-[12px] md:text-[16px] font-sans">Qualities</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
               <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-[10px] md:rounded-[16px] overflow-hidden">
                  <Image src={ASSETS.imgPexelsPixabay2648701} alt="GTG" fill className="object-cover" />
               </div>
               <span className="text-[14px] md:text-[20px] font-light font-sans">GTG</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
               <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-[10px] md:rounded-[16px] overflow-hidden opacity-80">
                  <Image src={ASSETS.imgPexelsRethaferguson30596092} alt="Arose" fill className="object-cover" />
               </div>
               <span className="text-[10px] md:text-[12px] text-[#666] font-light font-sans">Arose</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
               <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-[10px] md:rounded-[16px] overflow-hidden opacity-80">
                  <Image src={ASSETS.imgPexelsValeriya19617821} alt="Bella" fill className="object-cover" />
               </div>
               <span className="text-[10px] md:text-[12px] text-[#666] font-light font-sans">Bella</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:gap-4">
               <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-[10px] md:rounded-[15px] overflow-hidden opacity-80">
                  <Image src={ASSETS.imgPexelsArtempodrez68011771} alt="Daisies" fill className="object-cover" />
               </div>
               <span className="text-[10px] md:text-[12px] text-[#666] font-light font-sans">Daisies</span>
            </div>
         </div>

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
               <span key="1" className="font-light text-[#666] font-sans text-[12px] md:text-base">10x</span>,
               <span key="2" className="font-light text-[#666] font-sans text-[12px] md:text-base">1x</span>,
               <span key="3" className="font-light text-[#666] font-sans text-[12px] md:text-base">1x</span>,
               <span key="4" className="font-light text-[#666] font-sans text-[12px] md:text-base">10x</span>
            ]}
         />
         <TableRow 
            label="Bottle Design Score"
            items={[
               <span key="1" className="font-light text-[#666] font-sans text-[12px] md:text-base">9</span>,
               <span key="2" className="font-light text-[#666] font-sans text-[12px] md:text-base">5</span>,
               <span key="3" className="font-light text-[#666] font-sans text-[12px] md:text-base">6</span>,
               <span key="4" className="font-light text-[#666] font-sans text-[12px] md:text-base">2</span>
            ]}
         />
      </div>
      </div>

      <div className="mt-8 md:mt-12">
        <button className="bg-gradient-to-b from-[#032e15] to-[#016630] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium text-[16px] md:text-[20px] hover:opacity-90 transition-opacity cursor-pointer">
          Try It Risk-Free
        </button>
      </div>
    </div>
  );
};
