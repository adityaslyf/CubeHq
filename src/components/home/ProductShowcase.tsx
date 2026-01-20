"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ASSETS } from "./assets";

export const ProductShowcase = () => {
  const [selectedSubscription, setSelectedSubscription] = useState<"single" | "double">("single");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    ASSETS.imgRectangle6723,
    ASSETS.imgPexelsPixabay2648701,
    ASSETS.imgPexelsRethaferguson30596092,
    ASSETS.imgPexelsPixabay2649501,
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-8">
          <div className="relative w-full aspect-[610/673] rounded-[20px] overflow-hidden bg-[#d4d4d4]">
             <Image src={productImages[currentImageIndex]} alt="Product Main" fill className="object-cover" />
             
             <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex items-center justify-between px-3 md:px-6 z-10">
               <button 
                 onClick={handlePrevImage}
                 className="bg-white border border-[#032e15] rounded-full p-2 md:p-3 hover:bg-gray-50 shadow-md transition-all cursor-pointer"
               >
                 <Image src={ASSETS.imgIcon} alt="prev" width={16} height={16} className="md:w-5 md:h-5" />
               </button>
               
               <div className="flex gap-2 items-center">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        index === currentImageIndex ? 'bg-[#032e15] w-6 md:w-8' : 'bg-gray-400 w-2'
                      }`}
                    />
                  ))}
               </div>

               <button 
                 onClick={handleNextImage}
                 className="bg-white border border-[#032e15] rounded-full p-2 md:p-3 hover:bg-gray-50 shadow-md transition-all rotate-180 cursor-pointer"
               >
                 <Image src={ASSETS.imgIcon} alt="next" width={16} height={16} className="md:w-5 md:h-5" />
               </button>
             </div>
          </div>

          <div className="grid grid-cols-4 gap-2 md:gap-4">
             <button 
               onClick={() => setCurrentImageIndex(0)}
               className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all ${
                 currentImageIndex === 0 ? 'ring-2 ring-[#032e15]' : 'hover:opacity-80'
               }`}
             >
                <Image src={ASSETS.imgPexelsPixabay2648701} alt="ingredient" fill className="object-cover" />
             </button>
             <button 
               onClick={() => setCurrentImageIndex(1)}
               className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all ${
                 currentImageIndex === 1 ? 'ring-2 ring-[#032e15]' : 'hover:opacity-80'
               }`}
             >
                <Image src={ASSETS.imgPexelsRethaferguson30596092} alt="ingredient" fill className="object-cover" />
             </button>
             <button 
               onClick={() => setCurrentImageIndex(2)}
               className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all ${
                 currentImageIndex === 2 ? 'ring-2 ring-[#032e15]' : 'hover:opacity-80'
               }`}
             >
                <Image src={ASSETS.imgPexelsPixabay2649501} alt="ingredient" fill className="object-cover" />
             </button>
             <button 
               onClick={() => setCurrentImageIndex(3)}
               className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all ${
                 currentImageIndex === 3 ? 'ring-2 ring-[#032e15]' : 'hover:opacity-80'
               }`}
             >
                <Image src={ASSETS.imgPexelsValeriya19617821} alt="ingredient" fill className="object-cover" />
             </button>
          </div>
          
          <div className="grid grid-cols-4 gap-2 md:gap-4">
             <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden">
                <Image src={ASSETS.imgPexelsPixabay2648701} alt="ingredient" fill className="object-cover" />
             </div>
             <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden">
                <Image src={ASSETS.imgPexelsRethaferguson30596092} alt="ingredient" fill className="object-cover" />
             </div>
             <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden">
                <Image src={ASSETS.imgPexelsPixabay2649501} alt="ingredient" fill className="object-cover" />
             </div>
             <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden">
                <Image src={ASSETS.imgPexelsValeriya19617821} alt="ingredient" fill className="object-cover" />
             </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
           <div>
              <div className="flex flex-col mb-2">
                 <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-[#032e15] font-sans">GTG Perfumes</h2>
                 <div className="flex items-center gap-2">
                    <Image src={ASSETS.imgGroup1000003839} alt="stars" width={70} height={11} className="md:w-[83px] md:h-[13px]" />
                    <span className="text-[11px] md:text-[13px] font-light text-[#032e15] font-sans">4.7 (999+ reviews)</span>
                 </div>
              </div>
              <p className="text-[14px] md:text-[16px] font-light text-[#032e15] text-justify leading-relaxed font-sans">
                Experience the timeless allure backed by modern artistry, captured in every bottle of our fragrance. Crafted for those who seek to elevate their essence with purpose and sophistication.
              </p>
           </div>

           <div 
             className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${selectedSubscription === "single" ? "border-[#032e15]" : "border-[#b8b8b8]"}`}
             onClick={() => setSelectedSubscription("single")}
           >
              <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedSubscription === "single" ? "border-[#032e15]" : "border-gray-400"}`}>
                        {selectedSubscription === "single" && <div className="w-2 h-2 rounded-full bg-[#032e15]"></div>}
                      </div>
                      <span className="text-[20px] font-light text-[#032e15] tracking-wider font-sans">Single Subscription</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <span className="text-[20px] font-bold text-[#032e15]">$99.99</span>
                      <span className="text-[20px] font-light text-[#b8b8b8] line-through">$146</span>
                  </div>
              </div>
           </div>

           <div 
             className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${selectedSubscription === "double" ? "border-[#032e15]" : "border-[#b8b8b8]"}`}
             onClick={() => setSelectedSubscription("double")}
           >
              {selectedSubscription === "double" && (
                <div className="bg-[#032e15] text-white text-center py-2 text-[14px] font-bold">Most Popular</div>
              )}
              <div className="p-4">
                 <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedSubscription === "double" ? "border-[#032e15]" : "border-gray-400"}`}>
                          {selectedSubscription === "double" && <div className="w-2 h-2 rounded-full bg-[#032e15]"></div>}
                        </div>
                        <span className="text-[20px] font-light text-[#032e15] tracking-wider font-sans">Double Subscription</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[20px] font-bold text-[#032e15]">$169.99</span>
                        <span className="text-[20px] font-light text-[#b8b8b8] line-through">$146</span>
                    </div>
                 </div>

                 {selectedSubscription === "double" && (
                   <>
                     <div className="space-y-3 mb-6">
                        {[
                          { type: 'text', content: "2 bottles shipped monthly" },
                          { type: 'jsx', content: <span><span className="font-bold">Free</span> Sampler for original, lily and rose fragrances</span> },
                          { type: 'text', content: "50% OFF Shipping" },
                          { type: 'text', content: "Pause or Cancel Anytime after 3 months minimum" },
                          { type: 'text', content: "28 Day Money Back Guarantee*" }
                        ].map((feature, i) => (
                           <div key={i} className="flex gap-2 items-start">
                              <Image src={ASSETS.imgSealCheck} alt="check" width={14} height={14} className="mt-1 shrink-0" />
                              <p className="text-[14px] font-light text-[#032e15] font-sans">{feature.content}</p>
                           </div>
                        ))}
                     </div>

                     <p className="text-[16px] font-light text-[#032e15] mb-4 font-sans">What's Included:</p>
                     <div className="w-full h-px bg-[#b8b8b8] mb-6"></div>

                     <div className="flex gap-4 overflow-x-auto pb-2 mb-6">
                        <div className="border border-[#919798] rounded-lg p-4 w-[166px] shrink-0 flex flex-col items-center">
                           <div className="relative w-20 h-32 mb-2">
                              <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                           </div>
                           <p className="text-[16px] text-[#6f7577] font-light text-center font-sans">Every 30 Days</p>
                        </div>

                        <div className="flex flex-col gap-2">
                           <p className="text-[16px] font-light text-[#032e15] font-sans">Choose Fragrance 1</p>
                           <div className="flex gap-2">
                               <div className="border border-[#032e15] bg-[#f9f9f9] rounded px-2 py-2 flex flex-col items-center w-[100px] relative">
                                   <div className="absolute top-0 right-0 bg-green-900 text-white text-[8px] px-1 rounded-bl">BEST-SELLER</div>
                                   <div className="relative w-12 h-20 mb-1">
                                      <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                                   </div>
                                   <p className="text-xs bg-gradient-to-b from-green-900 to-green-700 bg-clip-text text-transparent">Original</p>
                               </div>
                               <div className="border border-transparent bg-[#f9f9f9] rounded px-2 py-2 flex flex-col items-center w-[100px] opacity-50">
                                   <div className="relative w-12 h-20 mb-1">
                                      <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                                   </div>
                                   <p className="text-xs text-gray-500">Lily</p>
                               </div>
                               <div className="border border-transparent bg-[#f9f9f9] rounded px-2 py-2 flex flex-col items-center w-[100px] opacity-50">
                                   <div className="relative w-12 h-20 mb-1">
                                      <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                                   </div>
                                   <p className="text-xs text-gray-500">Rose</p>
                               </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex gap-4 overflow-x-auto pb-2 mb-6">
                        <div className="border border-[#919798] rounded-lg p-4 w-[166px] shrink-0 flex flex-col items-center invisible">
                           <div className="relative w-20 h-32 mb-2">
                              <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                           </div>
                           <p className="text-[16px] text-[#6f7577] font-light text-center font-sans">Every 30 Days</p>
                        </div>

                        <div className="flex flex-col gap-2">
                           <p className="text-[16px] font-light text-[#032e15] font-sans">Choose Fragrance 2</p>
                           <div className="flex gap-2">
                               <div className="border border-[#032e15] bg-[#f9f9f9] rounded px-2 py-2 flex flex-col items-center w-[100px] relative">
                                   <div className="absolute top-0 right-0 bg-green-900 text-white text-[8px] px-1 rounded-bl">BEST-SELLER</div>
                                   <div className="relative w-12 h-20 mb-1">
                                      <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                                   </div>
                                   <p className="text-xs bg-gradient-to-b from-green-900 to-green-700 bg-clip-text text-transparent">Original</p>
                               </div>
                               <div className="border border-transparent bg-[#f9f9f9] rounded px-2 py-2 flex flex-col items-center w-[100px] opacity-50">
                                   <div className="relative w-12 h-20 mb-1">
                                      <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                                   </div>
                                   <p className="text-xs text-gray-500">Lily</p>
                               </div>
                               <div className="border border-transparent bg-[#f9f9f9] rounded px-2 py-2 flex flex-col items-center w-[100px] opacity-50">
                                   <div className="relative w-12 h-20 mb-1">
                                      <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                                   </div>
                                   <p className="text-xs text-gray-500">Rose</p>
                               </div>
                           </div>
                        </div>
                     </div>

                     <div className="border border-[#919798] rounded-lg p-4 flex gap-4 items-center">
                        <div className="flex -space-x-4">
                            <div className="relative w-8 h-12"><Image src={ASSETS.imgImageFx14Photoroom1} alt="b" fill className="object-contain" /></div>
                            <div className="relative w-8 h-12"><Image src={ASSETS.imgImageFx14Photoroom1} alt="b" fill className="object-contain" /></div>
                            <div className="relative w-8 h-12"><Image src={ASSETS.imgImageFx14Photoroom1} alt="b" fill className="object-contain" /></div>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#6f7577] font-light font-sans">One Time <span className="font-bold text-[#032e15]">(Free)</span></p>
                        </div>
                     </div>
                   </>
                 )}
              </div>
           </div>

           {selectedSubscription === "single" && (
             <div className="border border-[#b8b8b8] rounded-lg overflow-hidden relative">
                <div className="bg-[#032e15] text-white text-center py-2 text-[14px] font-bold">Most Popular</div>
                <div className="p-6">
                   <div className="space-y-3 mb-6">
                      {[
                        { type: 'text', content: "1 bottle shipped monthly" },
                        { type: 'jsx', content: <span><span className="font-bold">Free</span> Sampler for original, lily and rose fragrances</span> },
                        { type: 'text', content: "50% OFF Shipping" },
                        { type: 'text', content: "Pause or Cancel Anytime after 3 months minimum" },
                        { type: 'text', content: "28 Day Money Back Guarantee*" }
                      ].map((feature, i) => (
                         <div key={i} className="flex gap-2 items-start">
                            <Image src={ASSETS.imgSealCheck} alt="check" width={14} height={14} className="mt-1 shrink-0" />
                            <p className="text-[14px] font-light text-[#032e15] font-sans">{feature.content}</p>
                         </div>
                      ))}
                   </div>

                   <p className="text-[16px] font-light text-[#032e15] mb-4 font-sans">What's Included:</p>
                   <div className="w-full h-px bg-[#b8b8b8] mb-6"></div>

                   <div className="flex gap-4 overflow-x-auto pb-2">
                      <div className="border border-[#919798] rounded-lg p-4 w-[166px] shrink-0 flex flex-col items-center">
                         <div className="relative w-20 h-32 mb-2">
                            <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                         </div>
                         <p className="text-[16px] text-[#6f7577] font-light text-center font-sans">Every 30 Days</p>
                      </div>

                      <div className="flex flex-col gap-2">
                         <p className="text-[16px] font-light text-[#032e15] font-sans">Choose a Fragrance</p>
                         <div className="flex gap-2">
                             <div className="border border-[#032e15] bg-[#f9f9f9] rounded px-2 py-2 flex flex-col items-center w-[100px] relative">
                                 <div className="absolute top-0 right-0 bg-green-900 text-white text-[8px] px-1 rounded-bl">BEST-SELLER</div>
                                 <div className="relative w-12 h-20 mb-1">
                                    <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                                 </div>
                                 <p className="text-xs bg-gradient-to-b from-green-900 to-green-700 bg-clip-text text-transparent">Original</p>
                             </div>
                             <div className="border border-transparent bg-[#f9f9f9] rounded px-2 py-2 flex flex-col items-center w-[100px] opacity-50">
                                 <div className="relative w-12 h-20 mb-1">
                                    <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                                 </div>
                                 <p className="text-xs text-gray-500">Lily</p>
                             </div>
                             <div className="border border-transparent bg-[#f9f9f9] rounded px-2 py-2 flex flex-col items-center w-[100px] opacity-50">
                                 <div className="relative w-12 h-20 mb-1">
                                    <Image src={ASSETS.imgImageFx14Photoroom1} alt="bottle" fill className="object-contain" />
                                 </div>
                                 <p className="text-xs text-gray-500">Rose</p>
                             </div>
                         </div>
                      </div>
                   </div>
                   
                   <div className="mt-4 border border-[#919798] rounded-lg p-4 flex gap-4 items-center">
                      <div className="flex -space-x-4">
                          <div className="relative w-8 h-12"><Image src={ASSETS.imgImageFx14Photoroom1} alt="b" fill className="object-contain" /></div>
                          <div className="relative w-8 h-12"><Image src={ASSETS.imgImageFx14Photoroom1} alt="b" fill className="object-contain" /></div>
                          <div className="relative w-8 h-12"><Image src={ASSETS.imgImageFx14Photoroom1} alt="b" fill className="object-contain" /></div>
                      </div>
                      <div>
                          <p className="text-[16px] text-[#6f7577] font-light font-sans">One Time <span className="font-bold text-[#032e15]">(Free)</span></p>
                      </div>
                   </div>
                </div>
             </div>
           )}

           <button className="w-full bg-gradient-to-b from-[#032e15] to-[#016630] text-white py-4 rounded-full font-medium text-[18px] hover:opacity-90 transition-opacity cursor-pointer">
             Add to Cart
           </button>

        </div>
      </div>
    </div>
  );
};
