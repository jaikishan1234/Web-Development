const ContinueCard = ({ image, title, episode, duration, progress }) => {
  return (
    <div
      className="
            shrink-0
            w-[80vw]
            sm:w-[60vw]
            md:w-95
            lg:w-105
            xl:w-115
            rounded-xl
            bg-[#141428]
            overflow-hidden
            hover:scale-[1.02]
            transition
        "
    >
      {/* Thumbnail */}
      <div className="relative h-45 md:h-50 lg:h-55 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div
            className="h-full bg-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        <div className="mt-1 flex justify-between text-xs text-gray-400">
          <span>{episode}</span>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default ContinueCard;
