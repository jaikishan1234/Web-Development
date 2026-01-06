import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContinueCard from "./ContinueCard";
import { continueWatchingData } from "../data/continueWatchingData";

const ContinueWatching = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -420, // card width + gap
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="space-y-4 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Continue Watching</h2>
        <button className="text-sm text-gray-400 hover:text-white transition">
          See All
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Arrow (desktop only) */}
        <button
          onClick={scrollLeft}
          className="
            hidden md:flex
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            h-10 w-10 items-center justify-center
            rounded-full bg-black/50 hover:bg-black/70
            transition
          "
        >
          <ChevronLeft />
        </button>

        {/* Cards container */}
        <div
          ref={sliderRef}
          className="
            flex gap-4
            overflow-x-hidden
            overflow-y-hidden
            px-2
          "
        >
          {continueWatchingData.map((item) => (
            <ContinueCard
              key={item.id}
              image={item.image}
              title={item.title}
              episode={item.episode}
              duration={item.duration}
              progress={item.progress}
            />
          ))}
        </div>

        {/* Right Arrow (desktop only) */}
        <button
          onClick={scrollRight}
          className="
            hidden md:flex
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            h-10 w-10 items-center justify-center
            rounded-full bg-black/50 hover:bg-black/70
            transition
          "
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ContinueWatching;
