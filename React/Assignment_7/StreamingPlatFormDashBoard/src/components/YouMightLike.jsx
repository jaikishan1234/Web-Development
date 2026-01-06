import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import YouMightLikeCard from "./YouMightLikeCard";
import { youMightLikeData } from "../data/youMightLikeData";

const YouMightLike = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -320, // card width
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="space-y-4 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">You Might Like</h2>
        <button className="text-sm text-gray-400 hover:text-white transition">
          See All
        </button>
      </div>

      {/* Slider wrapper */}
      <div className="relative">
        {/* Left arrow (desktop only) */}
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

        {/* Cards row (THIS scrolls on mobile) */}
        <div
          ref={sliderRef}
          className="
            flex gap-4
            overflow-x-scroll
            overflow-y-hidden
            scrollbar-hide
            scroll-smooth
            px-2
          "
        >
          {youMightLikeData.map((item) => (
            <YouMightLikeCard
              key={item.id}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>

        {/* Right arrow (desktop only) */}
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

export default YouMightLike;
