import { Visibility } from "@mui/icons-material";
import { portfolio } from "../data/dummyData";
import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { motion, AnimatePresence } from "framer-motion";
import { InView } from "react-intersection-observer";

// Generate a unique list of categories
const allCategories = [
  "all",
  ...new Set(portfolio.map((item) => item.category)),
];

export const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setList(portfolio);
    } else {
      const filteredItems = portfolio.filter(
        (item) => item.category === category
      );
      // Set a short delay to allow for fade-out animation
      setList([]); // Clear list temporarily to trigger exit animation
      setTimeout(() => setList(filteredItems), 200); // Delay new items slightly
    }
  };

  return (
    <div className="flex pt-16 items-center justify-center">
      <article className="mt-[70px] mb-[80px] transition">
        <div className="container w-[80%] pt-10 mx-auto transition">
          <Heading title="Portfolio" />
          <div className="catButton flex flex-wrap justify-center items-center my-10 max-md:grid max-md:grid-cols-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className="capitalize primaryBtn ease-in-out w-[150px] max-md:w-[140px] sm:w-[200px] mr-4 mb-4 transition hover:-translate-y-1 hover:scale-105 duration-300 primaryBtn bg-none border-[2px] border-primaryColor hover:bg-primaryColor px-4 py-2 rounded-xl"
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid grid-cols-1 max-md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center place-items-center">
            <AnimatePresence>
              {list.map((item, i) => (
                <InView key={i} triggerOnce={false}>
                  {({ ref, inView }) => (
                    <motion.div
                      ref={ref}
                      key={item.title}
                      className="box relative transition duration-500"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      exit={{ opacity: 0, scale: 0.9 }} // Fade out on exit
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                      <div className="img w-full h-full">
                        <img
                          src={item.cover}
                          alt={item.title}
                          className="w-full h-full rounded-lg object-cover"
                        />
                      </div>
                      <div className="overlay absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition duration-500 bg-primaryColor cursor-pointer">
                        <div className="text-white text-center">
                          <h3>{item.title}</h3>
                          <span>{item.name}</span> <br />
                          <Visibility />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </article>
    </div>
  );
};
