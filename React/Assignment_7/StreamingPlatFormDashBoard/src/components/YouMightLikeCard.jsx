const YouMightLikeCard = ({ image, title }) => {
  return (
    <div
      className="
        shrink-0
        w-40
        sm:w-45
        md:w-55
        lg:w-65
        xl:w-75
        rounded-xl
        bg-[#141428]
        overflow-hidden
      "
    >
      {/* Image wrapper (CLIPS overflow) */}
      <div className="h-60 md:h-70 lg:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition-transform duration-300
            hover:scale-105
          "
        />
      </div>
    </div>
  );
};

export default YouMightLikeCard;
