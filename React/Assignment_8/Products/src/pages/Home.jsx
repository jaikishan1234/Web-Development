import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#00000000,transparent)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-zinc-800/20 to-transparent blur-3xl pointer-events-none" />

      <div
        className="relative z-10 max-w-3xl w-full group transition-transform duration-500 hover:rotate-x-3 hover:-rotate-y-3 hover:scale-[1.01]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />

        <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-950 shadow-2xl">
          <div className="relative bg-zinc-950 rounded-[calc(1.5rem-1px)] p-10 md:p-14 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

            <div className="relative mb-8 flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                  Collection 2026
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Timeless. <br />
              <span className="text-zinc-500">Essential.</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-400 mb-12 leading-relaxed max-w-lg font-light">
              A curated selection of premium goods. Designed for utility,
              engineered for longevity.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-black bg-white
              hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]
              hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
            >
              Explore Catalog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>

            <div className="mt-12 pt-8 border-t border-zinc-900 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
                  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={`${src}?w=64&h=64&fit=crop&crop=faces`}
                    alt="Customer"
                    className="w-8 h-8 rounded-full object-cover border-2 border-zinc-950 grayscale"
                  />
                ))}
              </div>
              <p className="text-xs text-zinc-500 font-medium">
                Trusted by 10k+ minimalists
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
