import React from 'react';
import { home } from "../data/dummyData";
import Typewriter from "typewriter-effect";
import homeBg from '../data/images/homeBg.png';

export const Hero = () => {
  return (
    <div className="hero relative h-screen flex items-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover z-[1]"
        style={{ backgroundImage: `url(${homeBg})` }}
      ></div>
      {home.map((val, i) => (
        <div className="heroContainer z-[2] w-[50%] m-auto text-center" key={i}>
          <h3 className="mb-5 font-semibold">{val.text}</h3>
          <h1 className="text-6xl font-semibold text-primaryColor mb-10">
            <Typewriter
              options={{
                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-10">{val.desc}</p>
          <button className="ease-in-out transition hover:-translate-y-1 hover:scale-105 duration-300 primaryBtn bg-none border-[2px] border-primaryColor hover:bg-primaryColor  px-4 py-2 rounded-xl">
            Download CV
          </button>
        </div>
      ))}
    </div>
  );
}
