import React from "react";
import { home } from "../data/dummyData";
import Typewriter from "typewriter-effect";
import homeBg from "../data/images/homeBg.png";
import { motion } from "framer-motion";

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
          <motion.h3
            className="mb-3 md:mb-5 font-semibold text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.5 }}
          >
            {val.text}
          </motion.h3>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primaryColor mb-6 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (i + 1) * 0.5 }}
          >
            <Typewriter
              options={{
                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h1>
          <motion.p
            className="mb-6 md:mb-10 text-sm sm:text-base md:text-lg text-gray-400 px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (i + 2) * 0.5 }}
          >
            {val.desc}
          </motion.p>
          <a href="https://docs.google.com/document/d/15Y1Hti4bcWm9cYVZaN0c1r1keJjLFkbG/edit?usp=sharing&ouid=115154159951712389638&rtpof=true&sd=true">
            <button className="transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-300 primaryBtn bg-primaryColor border-2 border-primaryColor hover:cursor-pointer text-white px-6 py-3 rounded-xl">
              Download CV
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};
