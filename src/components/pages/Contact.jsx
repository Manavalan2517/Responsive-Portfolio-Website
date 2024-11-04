import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummyData";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="contact flex justify-center items-center xl:h-screen pt-28 mx-5 max-md:pt-36"
    >
      <div className="container w-full max-w-4xl">
        <Heading title="Keep in Touch" />

        <div className="content space-y-10">
          <InView triggerOnce={false}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="left p-5"
              >
                <form className="space-y-4">
                  {["Name", "Email", "Subject", "Message"].map(
                    (placeholder, index) => (
                      <InView key={index} triggerOnce>
                        {({ ref, inView }) => (
                          <>
                            {placeholder === "Message" ? (
                              <motion.textarea
                                ref={ref}
                                placeholder={placeholder}
                                rows="10"
                                className="w-full p-4 border border-gray-300 text-black rounded-lg outline-none focus:border-primaryColor"
                                aria-label={placeholder}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.2,
                                }}
                              />
                            ) : (
                              <motion.input
                                ref={ref}
                                placeholder={placeholder}
                                type={
                                  placeholder === "Email" ? "email" : "text"
                                }
                                className="w-full p-4 border border-gray-300 text-black rounded-lg outline-none focus:border-primaryColor"
                                aria-label={placeholder}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.2,
                                }}
                              />
                            )}
                          </>
                        )}
                      </InView>
                    )
                  )}
                  <InView triggerOnce>
                    {({ ref, inView }) => (
                      <motion.button
                        ref={ref}
                        type="submit"
                        className="w-full p-4 bg-primaryColor text-white font-semibold rounded-lg hover:bg-primaryColor-dark transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        Submit
                      </motion.button>
                    )}
                  </InView>
                </form>
              </motion.div>
            )}
          </InView>

          <div className="flex flex-col sm:flex-row justify-between p-5 leading-7">
            {contact.map((val, i) => (
              <InView triggerOnce={false} key={i}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="box flex items-start space-x-3 mb-4 sm:mb-0"
                  >
                    <i className="text-primaryColor text-2xl">{val.icon}</i>
                    <div>
                      <p className="text-gray-400">{val.text1}</p>
                      <p className="text-gray-400">{val.text2}</p>
                    </div>
                  </motion.div>
                )}
              </InView>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
