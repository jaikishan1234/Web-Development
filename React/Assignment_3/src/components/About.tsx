import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 m-4 lg:p-4 md:p-4 min-h-[60vh]">
      <div className="bg-[#1E1E1E] flex flex-col flex-start justify-center gap-5 rounded-xl p-4">
        <h3 className="uppercase text-[#908989] lg:mb-10 lg:mt-8 lg:ml-4 lg:text-2xl">ABOUT</h3>
        <h1 className="text-xl lg:mb-15 lg:ml-4 lg:text-5xl">WHERE FASHION MEETS FREEDOM</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mb-10 lg:ml-4">
          <p className="text-[#908989] md:text-base lg:text-sm tracking-wider">
            We believe that fashion should be an expression of individuality. We
            encourage creativity and originality in every item we offer,
            presenting customers with exclusive collections from independent
            designers. With a commitment to fostering a community of creativity
            and innovation,
          </p>
          <p className="text-[#908989] md:text-base lg:text-sm tracking-wider">
            we strive to connect designers with fashion enthusiasts who
            appreciate the artistry and individuality behind each piece. Driven
            by our dedication to authenticity, we curate each collection with a
            keen eye for unique designs that inspire confidence and
            self-expression.
          </p>
        </div>
      </div>
      <div>
          <img
            src="/GirlBag.avif"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
    </div>
  );
};

export default About;
