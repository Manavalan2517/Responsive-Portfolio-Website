import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummyData";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="contact flex justify-center items-center h-auto pt-16 mx-5 max-md:pt-36"
    >
      <div className="container w-full max-w-4xl">
        <Heading title="Keep in Touch" />

        {/* Content layout: Form above, contact details below */}
        <div className="content space-y-10">
          {/* Form Section (Always on top) */}
          <div className="left p-5">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 max-md:space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-lg outline-none focus:border-primaryColor"
                  aria-label="Name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full sm:w-1/2 p-4 border border-gray-300 rounded-lg outline-none focus:border-primaryColor"
                  aria-label="Email"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-primaryColor"
                aria-label="Subject"
              />
              <textarea
                placeholder="Message"
                rows="10"
                className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-primaryColor"
                aria-label="Message"
              ></textarea>
              <button
                type="submit"
                className="w-full p-4 bg-primaryColor text-white font-semibold rounded-lg hover:bg-primaryColor-dark transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details Section (Always below) */}
          <div className="flex flex-col sm:flex-row justify-between p-5 leading-7">
            {contact.map((val, i) => (
              <div
                key={i}
                className="box flex items-start space-x-3 mb-4 sm:mb-0"
              >
                <i className="text-primaryColor text-2xl">{val.icon}</i>
                <div>
                  <p className="text-gray-600">{val.text1}</p>
                  <p className="text-gray-400">{val.text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
