import React from "react";
import { about } from "../data/dummyData";
import { Heading } from "../common/Heading";
import man from "../data/images/man.png";

export const About = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="about text-left">
        <div className="container flex">
          {about.map((val, i) => (
            <>
              <div className="left w-[35%]">
                <img src={man} alt="" />
              </div>
              <div className="right w-[65%]">
                <Heading title="About me" />
                <p className="mb-5 leading-8">{val.desc}</p>
                <p className="mb-10 leading-8">{val.desc1}</p>
                <div className="flex justify-center">
                  <button className="mr-6 ease-in-out transition hover:-translate-y-1 hover:scale-105 duration-300 primaryBtn bg-primaryColor border-[2px] border-primaryColor hover:bg-transparent  px-4 py-2 rounded-xl">
                    Download CV
                  </button>
                  <button className="ease-in-out transition hover:-translate-y-1 hover:scale-105 duration-300 primaryBtn bg-none border-[2px] border-primaryColor hover:bg-primaryColor  px-4 py-2 rounded-xl">
                    Download CV
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
