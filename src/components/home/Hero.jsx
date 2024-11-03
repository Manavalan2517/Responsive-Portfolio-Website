import React from "react";
import { home } from "../data/dummyData";
import Typewriter from "typewriter-effect";
import homeBg from "../data/images/homeBg.png";
import { motion } from "framer-motion"; // Import motion from framer-motion

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
            className="mb-3 md:mb-5 font-semibold text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, y: 20 }} // Start off invisible and slightly moved down
            animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
            transition={{ duration: 0.5, delay: i * 0.5 }} // Stagger animations based on index
          >
            {val.text}
          </motion.h3>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primaryColor mb-6 md:mb-10"
            initial={{ opacity: 0, y: 20 }} // Start off invisible and slightly moved down
            animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
            transition={{ duration: 0.5, delay: (i + 1) * 0.5 }} // Stagger animations based on index
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
            className="mb-6 md:mb-10 text-sm sm:text-base md:text-lg text-gray-600 px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }} // Start off invisible and slightly moved down
            animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
            transition={{ duration: 0.5, delay: (i + 2) * 0.5 }} // Stagger animations based on index
          >
            {val.desc}
          </motion.p>
          <motion.button
            className="ease-in-out hover:-translate-y-1 primaryBtn bg-none border-[2px] border-primaryColor hover:bg-primaryColor px-6 py-2 md:px-8 md:py-3 rounded-xl text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, scale: 0.5 }} // Start off invisible and scaled down
            animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal size
            transition={{ duration: 0.5, delay: (i + 3) * 0.5 }} // Stagger animations based on index
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on click
          >
            Download CV
          </motion.button>
        </div>
      ))}
    </div>
  );
};
