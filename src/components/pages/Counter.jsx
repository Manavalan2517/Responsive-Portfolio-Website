import React from "react";
import { project } from "../data/dummyData";
import homeBg from "../data/images/homeBg.png";
import CountUp from "react-countup";

export const Counter = () => {
  return (
    <div
      className="relative flex items-center justify-center mt-20 bg-fixed bg-center bg-no-repeat bg-cover h-[50vh]"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="container relative grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center text-center px-4">
        {project.map((val, i) => (
          <div key={i} className="box flex flex-col items-center gap-3">
            <i className="text-4xl mb-4">{val.icon}</i>
            <h1 className="text-primaryColor text-5xl sm:text-6xl md:text-7xl font-bold">
              <CountUp enableScrollSpy duration={2} end={val.num} />
            </h1>
            <h3 className="text-base sm:text-lg md:text-xl">{val.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
