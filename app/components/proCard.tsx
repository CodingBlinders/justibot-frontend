import React from "react";

const ProCard = () => {
  return (
    <>
      <div className="h-48 rounded-[15px] p-4 w-full bg-gradient-to-r from-[#622F1D] via-[#A36A32] to-[#A36A32] border-2 border-white/26 flex flex-col justify-center items-center gap-5">
        <div className="text-sm md:text-base lg:text-xl font-semibold">
          Upgrade to Pro
        </div>
        <div className="text-xs md:text-sm lg:text-base text-center">
          Unlock powerful features with our Pro upgrade today!
        </div>
        <button className="bg-[rgba(179,179,179,0.3)] hover:bg-[#622F1D] text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline text-sm md:text-base lg:text-lg">
          Upgrade Now
        </button>
      </div>
    </>
  );
};

export default ProCard;
