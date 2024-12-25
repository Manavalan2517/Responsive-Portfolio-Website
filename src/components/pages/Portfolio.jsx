"use client";
import { portfolio } from "../data/dummyData";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CreativeBtn2 from "./CreativeBtn2";
import { Heading } from "../common/Heading";

export const Portfolio = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="gap-4 max-md:pt-36 max-md:px-1 px-52 ">
      <Heading title="Projects" />
      <div className="w-full overflow-hidden">
        <motion.div
          ref={carousel}
          drag="x"
          whileDrag={{ scale: 0.95 }}
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex will-change-transform cursor-grab active:cursor-grabbing"
        >
          {portfolio.map((item, index) => (
            <motion.div key={index} className="min-w-[20rem] min-h-[25rem] p-2">
              <div className="max-md:h-[450px] h-[450px] group mx-auto dark:bg-[#252525] p-4 bg-white dark:border-0 border overflow-hidden rounded-xl dark:text-white text-black">
                <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-xl relative overflow-hidden">
                  <div
                    style={{
                      background:
                        "linear-gradient(123.9deg, #0B65ED 1.52%, rgba(0, 0, 0, 0) 68.91%)",
                    }}
                    className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300"
                  ></div>
                  <img
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300"
                  />
                </figure>
                <article className="p-4 space-y-2">
                  <h1 className="text-xl font-semibold capitalize">
                    {item.title}
                  </h1>
                  <CreativeBtn2 link={item.link}/>
                </article>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};