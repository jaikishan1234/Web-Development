import { Sparkles, Twitter, Linkedin, Instagram } from "lucide-react";

const GetStarted = () => {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-24">
      <div className="relative rounded-[48px] border border-gray-200 bg-white px-6 md:px-16 py-20 overflow-hidden">
        {/* TOP LABEL */}
        <p className="text-center text-sm md:text-2xl text-purple-500 mb-6">
          Open the door to forging your brand’s story
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-5xl mx-auto">
          Embark on a Transformative Journey <br />
          Shaping{" "}
          <span className="relative inline-block px-4 py-1 rounded-full bg-yellow-400 text-black">
            Your Brand’s Destiny
          </span>{" "}
          Through Our <br />
          Dedicated Partnership
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-center text-gray-400 max-w-xl mx-auto">
          Join us on a transformative journey to shape your brand’s destiny
          through our dedicated partnership, crafting a narrative that
          resonates.
        </p>

        {/* FLOATING CTA BUTTON */}
        <div className="hidden md:flex absolute right-6 md:right-20 top-1/2 -translate-y-1/2">
          <button
            className="group relative h-28 w-28 md:h-32 md:w-32 rounded-full
            bg-purple-600 text-white flex items-center justify-center
            transition-transform duration-500 ease-out
            hover:rotate-12 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full border border-white/30" />

            <div
              className="text-xs uppercase tracking-widest text-center leading-snug
              animate-[spin_18s_linear_infinite] hover:[animation-play-state:paused]"
            >
              Let’s <br /> Get <br /> Started
            </div>
          </button>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-px w-full bg-gray-200" />

        {/* FOOTER ROW */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-sm md:text-xl text-gray-400 gap-4">
          <span>Via della Creatività, 23, 20121 Milano</span>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Twitter / X"
              className="hover:text-gray-800 transition-colors"
            >
              <Twitter size={30} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-800 transition-colors"
            >
              <Linkedin size={30} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-800 transition-colors"
            >
              <Instagram size={30} />
            </a>
          </div>

          <span>Privacy & Cookie Policy · Astratto © 2023</span>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
