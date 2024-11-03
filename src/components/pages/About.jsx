import React from "react";
import { about } from "../data/dummyData";
import { Heading } from "../common/Heading";
import man from "../data/images/man.png";
import { Link } from "react-scroll"; // Import Link from react-scroll

export const About = () => {
  return (
    <div className="flex justify-center items-center xl:h-screen max-md:pt-36 px-4 lg:px-0">
      <div className="about text-left w-full max-w-6xl">
        <div className="container flex flex-col lg:flex-row lg:space-x-10 space-y-8 lg:space-y-0 items-center">
          {about.map((val, i) => (
            <React.Fragment key={i}>
              {/* Image Section */}
              <div className="left w-full lg:w-[35%] flex justify-center lg:justify-start">
                <img
                  src={man}
                  alt="Profile"
                  className="w-[60%] lg:w-full rounded-lg"
                />
              </div>

              {/* Text Section */}
              <div className="right w-full lg:w-[65%] space-y-5">
                <Heading title="About me" />
                <p className="leading-7 md:leading-8 text-gray-700">
                  {val.desc}
                </p>
                <p className="leading-7 md:leading-8 text-gray-700">
                  {val.desc1}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 max-md:pt-10">
                  <button className="transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-300 primaryBtn bg-primaryColor border-2 border-primaryColor hover:cursor-pointer text-white px-6 py-3 rounded-xl">
                    Download CV
                  </button>
                  <Link
                    to="contact" // The ID of the element to scroll to
                    smooth={true} // Enables smooth scrolling
                    duration={500} // Duration of the scroll in milliseconds
                    className="transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-300 primaryBtn border-2 border-primaryColor text-primaryColor hover:cursor-pointer hover:bg-primaryColor hover:text-white px-6 py-3 rounded-xl"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
