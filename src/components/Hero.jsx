import React from "react";

const Hero = () => {
  return (
    <>
      <div
        id="/"
        className="flex h-[80vh] justify-center items-center flex-col"
      >
        <div className="w-full h-screen bg-hero bg-cover bg-left">
          <div
            className="w-full h-full flex justify-end items-center 
             bg-slate-700/80 backdrop-brightness-75"
          >
            <span className="text-[#FBB9D3] text-xl md:text-4xl w-1/2 text-right mr-20">
              Let me help, in educating and guiding you through the journey that
              birth and motherhood is, at a pace and in a way that feels good
              for you and your partner.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
