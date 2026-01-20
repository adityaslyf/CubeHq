import React from "react";

export const StatsBar = () => {
  const stats = [
    { value: "84%", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { value: "78%", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { value: "89%", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { value: "90%", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#032e15] to-[#016630] py-10 md:py-16 text-white">
       <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 px-4">
          {stats.map((stat, i) => (
             <div key={i} className="flex flex-col items-center text-center gap-2 md:gap-4 flex-1">
                <span className="text-[32px] md:text-[40px] font-bold font-sans">{stat.value}</span>
                <p className="text-[14px] md:text-[16px] font-light font-sans">{stat.label}</p>
             </div>
          ))}
       </div>
    </div>
  );
};
