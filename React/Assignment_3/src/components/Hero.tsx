import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] bg-[#060503] px-4 sm:px-6 md:px-10">
      <div
        className="relative h-full w-full max-w-125 md:max-w-225 lg:max-w-450 mx-auto bg-cover bg-center rounded-xl"
        style={{ backgroundImage: "url('/HeroBg.avif')" }}
      >
        {/* TEXT GROUP */}
        <div className="absolute left-4 top-1/4 md:left-12 md:top-1/3 lg:left-60 lg:top-auto lg:bottom-45 text-white ">
          <h1 className="uppercase tracking-[0.5em] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Design
          </h1>
          <h1 className="uppercase tracking-[0.5em] font-medium text-3xl sm:text-4xl md:text-5xl lg:text-7xl ml-8 mt-2">
            & Freedom
          </h1>
        </div>
        <p className="absolute mt-5 text-white/70 font-medium text-sm md:text-lg leading-relaxed top-60 p-4 md:top-auto md:left-[15%] md:bottom-[26%] md:max-w-md lg:top-auto lg:bottom-15 lg:left-[25%] lg:max-w-lg">
            Explore Independent Style by Embracing Uniqueness with Our Exclusive Designer Apparel
        </p>
        <div className="absolute flex items-center justify-center gap-2 bottom-1/4 left-1/3 md:text-lg md:left-[80%] md:top-[65%] lg:left-[85%] lg:top-[85%]">
            <div><i className="ri-arrow-down-line bg-[#2D322C] rounded-full w-8 h-8 flex items-center justify-center "></i></div>
            <div className="uppercase ">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
