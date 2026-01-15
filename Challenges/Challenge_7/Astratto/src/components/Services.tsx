import { ArrowUpRight, Sparkles } from "lucide-react";
import React from "react";

const services = [
  {
    id: 1,
    title: "Motion\nGraphics",
    description:
      "Bring your ideas to life through dynamic visuals and engaging animations.",
    image: "/boat.png",
    featured: false,
  },
  {
    id: 2,
    title: "2D/3D\nAnimation",
    description:
      "Turn imagination into reality with our stunning 2D/3D animations.",
    image: "/center.png",
    featured: true,
  },
  {
    id: 3,
    title: "Visual\nIdentity",
    description:
      "Shape a unique brand persona through our comprehensive Visual Identity solutions.",
    image: "/rightCard.png",
    featured: false,
  },
];

const Services = () => {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-20">
      <div className="rounded-[40px] border border-gray-200 p-10 md:p-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Services</h2>
          <p className="max-w-md text-sm md:text-xl text-gray-400">
            Discover a wide range of opportunities through a comprehensive range
            of qualified services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 mb-24">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-[28px] p-6 md:p-7 transition-all ${
                service.featured
                  ? "bg-linear-to-br from-purple-600 to-violet-700 text-white"
                  : "border-2 border-purple-400 bg-white"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-medium whitespace-pre-line">
                  {service.title}
                </h3>

                <div
                  className={`h-14 w-14 rounded-full flex items-center justify-center ${
                    service.featured
                      ? "bg-white/20"
                      : "bg-purple-700 text-white"
                  }`}
                >
                  <ArrowUpRight size={38} className="text-white" />
                </div>
              </div>

              <hr
                className={`mb-4 ${
                  service.featured ? "border-white/30" : "border-purple-400"
                }`}
              />

              <p
                className={`text-sm mb-6 ${
                  service.featured ? "text-purple-100" : "text-gray-500"
                }`}
              >
                {service.description}
              </p>

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop-only static navigation */}
        <div className="hidden md:flex items-center justify-between mt-10 px-2">
          {/* Left arrows */}
          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-2xl cursor-default">←</span>
            <span className="text-2xl cursor-default text-gray-600">→</span>
          </div>

          {/* Pagination lines */}
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-10 bg-gray-800 rounded-full" />
            <span className="h-0.5 w-6 bg-gray-300 rounded-full" />
            <span className="h-0.5 w-6 bg-gray-300 rounded-full" />
            <span className="h-0.5 w-6 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* ABOUT ASTRATTO */}
        <div className="mt-28 text-center relative px-4 md:px-0">
          {/* Small label */}
          <p className="text-xs md:text-2xl tracking-widest text-gray-400 uppercase mb-8">
            — About Astratto
          </p>

          {/* Main statement */}
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed max-w-4xl mx-auto">
            Our <span className="text-gray-400">visionary</span>{" "}
            <span className="text-orange-500">artisans</span> collaborate{" "}
            <span className="text-purple-500">seamlessly</span> to craft{" "}
            {/* Logo inline */}
            <span className="inline-flex items-center justify-center align-middle mx-2">
              <img
                src="/nav.png" // <-- your logo image here
                alt="Astratto mark"
                className="h-7 w-7 md:h-12 md:w-12"
              />
            </span>{" "}
            inspiring <span className="text-gray-400">experiences</span>,{" "}
            <span className="text-orange-500">leaving</span> lasting{" "}
            <span className="text-gray-400">imprints</span> on{" "}
            <span className="text-purple-500">brands</span> and spaces.
          </h3>

          {/* Decorative elements (desktop only) */}
          <div className="hidden md:block">
            {/* Purple wave */}
            <svg
              className="absolute left-20 -bottom-10"
              width="260"
              height="60"
              viewBox="0 0 260 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 30 C 40 0, 80 60, 120 30 C 160 0, 200 60, 260 30"
                stroke="#7C3AED"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {/* Lucide sparkle */}
            <Sparkles
              size={36}
              className="absolute right-24 bottom-6 text-yellow-400"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
