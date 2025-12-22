import React from "react";

const AdvantagesSection = () => {
  return (
    <section className="m-4 md:p-4 lg:p-4">
      <h1 className="uppercase text-xl mb-6 md:text-3xl lg:text-5xl lg:p-10">
        our advantages
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:auto-rows-fr gap-5">
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src="/Fashion.avif"
            alt="Fashion"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-5 h-full">
          <div className="bg-[#2D322C] p-6 lg:p-8 rounded-xl flex flex-col lg:flex-row lg:items-center lg:justify-between flex-1">
            <div className="w-full lg:max-w-[80%]">
              <h2 className="uppercase mb-4 text-white tracking-wide">
                independent designers
              </h2>
              <p className="text-sm leading-relaxed text-gray-300">
                Our platform celebrates the ingenuity of independent designers,
                offering a diverse range of fashion-forward garments that
                reflect the creativity and innovation of the artists behind
                them. Explore curated collections showcasing unique creations by
                independent designers.
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
                exclusive & uniquity
              </h2>
              <p className="text-sm leading-relaxed text-gray-300">
                Indulge in curated collections showcasing exclusive,
                one-of-a-kind pieces, each with its own story and charm.
                Experience the allure of unique fashion pieces that radiate
                sophistication and individuality, curated for those who seek
                exclusivity.
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
      </div>
    </section>
  );
};

export default AdvantagesSection;
