import { Play, Download, MoreHorizontal, Flame } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-85 md:h-110 rounded-2xl overflow-hidden">
      {/* Background image */}
      <img
        src="https://wallpapercave.com/wp/wp11799719.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0f0f1a]/95 via-[#0f0f1a]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-10 max-w-2xl">
        {/* Trending badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur">
            <Flame size={14} className="text-orange-400" />
            Now Trending
          </span>
        </div>

        {/* Category pills */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-white/10">
            Drama
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-white/10">
            Fantasy
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Dimensional Kids on <br /> an Adventure
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-gray-300 max-w-xl">
          When two curious kids stumble into a hidden portal, they travel across
          magical dimensions while trying to find their way home.
        </p>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3">
          <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 transition px-5 py-2.5 rounded-lg text-sm font-medium">
            <Play size={18} />
            Watch Now
          </button>

          <button className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition">
            <Download size={18} />
          </button>

          <button className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-4 right-4 z-20">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/40 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
