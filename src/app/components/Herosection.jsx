import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, my name is Lee.
          </h1>
          <p className="text-[#b8b4d2] text-lg lg:text-xl">
            I love coding brilliantly simple things.
          </p>
        </div>
        <div className="col-span-5">
          <Image
            src="/images/hero-image.png"
            alt="hero image of lee"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
