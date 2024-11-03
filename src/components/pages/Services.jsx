import React from "react";
import { Heading } from "../common/Heading";
import { services } from "../data/dummyData";

export const Services = () => {
  return (
    <div className="services flex items-center justify-center min-h-screen max-md:pt-36">
      <div className="container mx-auto px-4">
        <Heading title="Services" />
        <div className="content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((val, i) => (
            <div
              key={i} // Add key for each item in the list
              className="box bg-primaryBackground p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <i className="text-primaryColor text-3xl" aria-hidden="true">
                {val.icon}
              </i>
              <h3 className="mt-5 text-lg font-semibold">{val.title}</h3>
              <h3 className="text-greyDark text-sm">{val.desc}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
