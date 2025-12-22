import React from "react";

const ValuesSection = () => {
  return (
    <section className="m-4 md:p-4 lg:p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:auto-rows-fr gap-5">
        <div className="flex flex-col gap-5 h-full">
          <div className="bg-[#2D322C] p-6 lg:p-8 rounded-xl flex flex-col lg:flex-row lg:items-center lg:justify-between flex-1">
            <div className="w-full lg:max-w-[80%]">
              <h2 className="uppercase mb-4 text-white tracking-wide">
                high quality
              </h2>
              <p className="text-sm leading-relaxed text-gray-300">
                Embrace superior craftsmanship with our meticulously curated,
                enduringly high-quality garments. Discover garments crafted with
                utmost attention to detail and finest materials, promising
                longevity and timeless style.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6 lg:mt-0 lg:ml-6 justify-start lg:justify-end shrink-0">
              <i className="ri-arrow-right-up-line text-white border border-white/60 rounded-full w-9 h-9 flex items-center justify-center"></i>
              <span className="uppercase text-sm text-white tracking-wider">
                Explore
              </span>
            </div>
          </div>

          <div className="bg-[#2D322C] p-6 lg:p-8 rounded-xl flex flex-col lg:flex-row lg:items-center lg:justify-between flex-1">
            <div className="w-full lg:max-w-[80%]">
              <h2 className="uppercase mb-4 text-white tracking-wide">
                eco-friendly
              </h2>
              <p className="text-sm leading-relaxed text-gray-300">
                Join our commitment to sustainability with eco-friendly fashion
                options, stylish yet mindful of our planet. Explore guilt-free
                shopping with our eco-conscious collections, crafted with
                planet-friendly materials and ethical practices.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6 lg:mt-0 lg:ml-6 justify-start lg:justify-end shrink-0">
              <i className="ri-arrow-right-up-line text-white border border-white/60 rounded-full w-9 h-9 flex items-center justify-center"></i>
              <span className="uppercase text-sm text-white tracking-wider">
                Explore
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src="/Mannequin.avif"
            alt="Craftsmanship"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
