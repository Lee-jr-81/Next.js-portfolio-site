import React from "react";
import Image from "next/image";

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to bg-orange-600">
              Hello
            </span>
            {""}, my name is Lee.
          </h1>
          <p className="text-[#9c9c9c] text-base sm:text-lg lg:text-xl mb-6">
            I love coding brilliantly simple things.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-yellow-500 to bg-orange-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300 text-white">
              Contact Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300 text-white  mt-3">
              <span className="block bg-[#0e0e0e] rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full overflow-hidden bg-[#1a1a1a] w-[300px] h-[200px] lg:w-[400px] lg:h-[250px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image of lee"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
