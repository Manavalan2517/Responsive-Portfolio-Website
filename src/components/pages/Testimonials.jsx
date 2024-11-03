import React from "react";
import { testimonials } from "../data/dummyData";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import homeBg from "../data/images/homeBg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; // Import Framer Motion
import { InView } from "react-intersection-observer"; // Import InView

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev">‹</button>,
    nextArrow: <button className="slick-next">›</button>,
  };

  return (
    <InView triggerOnce={false} threshold={0.7}>
      {({ ref, inView }) => (
        <div
          ref={ref}
          className="testimonials relative flex items-center justify-center h-screen"
        >
          <div
            className="absolute w-full h-full bg-fixed bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${homeBg})` }}
          />
          <div className="relative z-20 w-[95%] text-center p-5">
            <Slider {...settings}>
              {testimonials.map((val, i) => (
                <motion.div
                  key={i}
                  className="box text-center"
                  initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and below the viewport
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  } // Animate in when inView
                  exit={{ opacity: 0, y: -50 }} // Animate out when slide changes
                  transition={{ duration: 0.6 }}
                >
                  <i className="bg-white text-[20px] p-[15px] m-[30px] inline-block text-primaryColor rounded-full shadow-md">
                    <FormatQuoteIcon />
                  </i>
                  <p className="text-gray-300 text-lg mb-5 px-5">{val.text}</p>
                  <div className="img flex justify-center mb-4">
                    <div className="w-[120px] h-[120px] bg-cover border-primaryColor rounded-full border-[3px]">
                      <img
                        src={val.image}
                        alt={val.name}
                        className="w-[100px] h-[100px] m-[7px] rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-xl">
                    {val.name}
                  </h3>
                  <label className="text-primaryColor text-md">
                    {val.post}
                  </label>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </InView>
  );
};
