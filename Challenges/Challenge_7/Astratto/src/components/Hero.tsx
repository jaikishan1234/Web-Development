import React from "react";

const Hero = () => {
  return (
    <>
      {/* 🔥 ANIMATION DEFINITIONS */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes pulseSoft {
            0%, 100% {
              transform: rotate(3deg) scale(1);
            }
            50% {
              transform: rotate(3deg) scale(1.05);
            }
          }

          @keyframes draw {
            from {
              stroke-dasharray: 400;
              stroke-dashoffset: 400;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>

      <div className="relative w-full px-5 md:px-10 lg:px-20 pt-24 pb-32 md:min-h-screen overflow-hidden">
        
        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center gap-5 relative z-10">
          
          {/* Subtitle */}
          <h3
            className="font-normal text-[#9A9A9A] md:text-2xl
              opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          >
            Igniting the Spark of Inspiration
          </h3>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-9xl text-center leading-tight
              opacity-0 animate-[fadeUp_1s_ease-out_0.2s_forwards]"
          >
            Unleash Your
            <br />
            Brand{" "}
            <span className="inline-flex items-center mx-2 md:mx-4">
              <img
                src="/orange.png"
                alt=""
                className="h-[0.9em] w-auto animate-[float_4s_ease-in-out_infinite]"
              />
            </span>
            with Our
            <br />
            <span className="relative inline-block">
              {/* Highlight */}
              <span
                className="absolute inset-0 bg-yellow-200 rounded-3xl rotate-3
                  animate-[pulseSoft_3s_ease-in-out_infinite]"
                aria-hidden="true"
              />
              <span className="relative text-purple-600 px-3 py-2 md:py-1">
                Mágico
              </span>
            </span>
            Design
          </h1>
        </div>

        {/* LEFT IMAGE */}
        <div className="absolute top-[5%] left-[3%] hidden md:block z-0">
          <img
            src="/left.png"
            alt=""
            className="w-86 -rotate-6 animate-[float_6s_ease-in-out_infinite]"
          />
        </div>

        {/* ORANGE WAVE */}
        <div className="hidden md:block absolute top-[50%] left-[5%] -rotate-10">
          <svg
            width="180"
            height="40"
            viewBox="0 0 180 40"
            fill="none"
            className="animate-[draw_1.6s_ease-out_forwards]"
          >
            <path
              d="M0 25 C 25 5, 45 45, 70 25 C 95 5, 115 45, 140 25 C 155 15, 170 10, 180 15"
              stroke="#F97316"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* ADDRESS */}
        <div className="absolute top-[7%] right-[3%] hidden md:flex flex-col gap-3 z-10">
          <button className="bg-purple-600 text-white text-sm px-5 py-2 rounded-full hover:scale-105 transition">
            Via della Creatività, 23
          </button>
          <button className="bg-purple-600 text-white text-sm px-5 py-2 rounded-full self-end hover:scale-105 transition">
            20121 Milano
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="absolute bottom-[13%] right-[3%] hidden md:block z-0">
          <img
            src="/right.png"
            alt=""
            className="w-86 rotate-4 animate-[float_7s_ease-in-out_infinite]"
          />
        </div>

        {/* CTA + HAND */}
        <div className="absolute bottom-[10%] left-[11%] hidden md:flex items-center gap-1 z-0 -rotate-6">
          <button className="inline-flex items-center px-6 py-3 rounded-full border-2 border-orange-400 font-medium hover:bg-orange-400 hover:text-white transition">
            Create Magic
          </button>
          <img
            src="/hand.png"
            alt=""
            className="w-40 animate-[float_5s_ease-in-out_infinite]"
          />
        </div>

        {/* YELLOW WAVE */}
        <div className="hidden md:block absolute bottom-[15%] left-[45%] rotate-7">
          <svg
            width="320"
            height="60"
            viewBox="0 0 320 60"
            fill="none"
            className="animate-[draw_1.8s_ease-out_0.4s_forwards]"
          >
            <path
              d="M 0 35
                 C 40 10, 80 10, 120 35
                 C 160 60, 200 60, 240 35
                 C 270 15, 295 20, 320 30"
              stroke="#FACC15"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
