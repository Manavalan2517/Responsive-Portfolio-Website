import React from "react";
import { home } from "../data/dummyData";
import Typewriter from "typewriter-effect";
import homeBg from "../data/images/homeBg.png";

export const Hero = () => {
  return (
    <div className="hero relative h-screen flex items-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-no-repeat bg-cover z-[0]"
        style={{ backgroundImage: `url(${homeBg})` }}
      ></div>
      {home.map((val, i) => (
        <div
          className="heroContainer z-[2] w-[90%] md:w-[70%] lg:w-[50%] mx-auto text-center p-4 sm:p-8"
          key={i}
        >
          <h3 className="mb-3 md:mb-5 font-semibold text-lg md:text-xl text-gray-700">
            {val.text}
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primaryColor mb-6 md:mb-10">
            <Typewriter
              options={{
                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-6 md:mb-10 text-sm sm:text-base md:text-lg text-gray-600 px-4 md:px-0">
            {val.desc}
          </p>
          <button className="ease-in-out transition hover:-translate-y-1 hover:scale-105 duration-300 primaryBtn bg-none border-[2px] border-primaryColor hover:bg-primaryColor px-6 py-2 md:px-8 md:py-3 rounded-xl text-sm sm:text-base md:text-lg">
            Download CV
          </button>
        </div>
      ))}
    </div>
  );
};
