import React from "react";
import { project } from "../data/dummyData";
import homeBg from "../data/images/homeBg.png";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Counter = () => {
  return (
    <div
      className="relative flex items-center justify-center mt-20 bg-fixed bg-center bg-no-repeat bg-cover h-[50vh]"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="container relative grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center text-center px-4">
        {project.map((val, i) => (
          <InView key={i} triggerOnce={false}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                className="box flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <i className="text-4xl mb-4">{val.icon}</i>
                <h1 className="text-primaryColor text-5xl sm:text-6xl md:text-7xl font-bold">
                  {inView ? <CountUp duration={2} end={val.num} /> : 0}
                </h1>
                <h3 className="text-base sm:text-lg md:text-xl">{val.title}</h3>
              </motion.div>
            )}
          </InView>
        ))}
      </div>
    </div>
  );
};
