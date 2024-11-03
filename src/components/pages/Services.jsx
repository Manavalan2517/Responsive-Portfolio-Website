import React from "react";
import { Heading } from "../common/Heading";
import { services } from "../data/dummyData";

export const Services = () => {
  return (
    <div className="services flex items-center justify-center h-screen">
      <div className="container">
        <Heading title="Services" />
        <div className="content grid grid-cols-3 gap-8">
          {services.map((val, i) => (
            <div className="box bg-primaryBackground p-[35px] rounded-xl">
              <i className="text-primaryColor">{val.icon}</i>
              <h3 className="mt-5 font-semibold">{val.title}</h3>
              <h3 className="text-greyDark">{val.desc}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
