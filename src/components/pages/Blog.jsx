import React from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/dummyData";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { InView } from "react-intersection-observer"; // Import InView

export const Blog = () => {
  return (
    <div className="flex justify-center items-center h-screen py-20 max-md:mx-5 max-md:pt-36">
      <div className="container">
        <Heading title="Blog" />
        <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center place-items-center">
          {blog.map((val, index) => (
            <InView key={index} triggerOnce={false} threshold={0.2}>
              {({ ref, inView }) => (
                <motion.div
                  ref={ref}
                  className="box bg-primaryBackground rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and below the viewport
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  } // Animate in when inView
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered by index
                >
                  <div className="img">
                    <img
                      src={val.cover}
                      alt={val.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="text px-4 py-6">
                    <h3 className="font-semibold text-lg mb-2">{val.title}</h3>
                    <label className="block text-left text-primaryColor">
                      By {val.author} on {val.date}
                    </label>
                    <p className="text-left pt-2 text-greyDark">{val.desc}</p>
                  </div>
                </motion.div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </div>
  );
};
