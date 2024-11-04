import React from "react";
import { Heading } from "../common/Heading";
import { services } from "../data/dummyData";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export const Services = () => {
  return (
    <div className="services flex items-center justify-center min-h-screen max-md:pt-36">
      <div className="container mx-auto px-4">
        <Heading title="Services" />
        <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((val, i) => (
            <InView key={i} threshold={0.2} triggerOnce={false}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  className="box bg-primaryBackground p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.2,
                  }}
                >
                  <i className="text-primaryColor text-3xl" aria-hidden="true">
                    {val.icon}
                  </i>
                  <h3 className="mt-5 text-lg font-semibold">{val.title}</h3>
                  <h3 className="text-greyDark text-sm">{val.desc}</h3>
                </motion.div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </div>
  );
};
