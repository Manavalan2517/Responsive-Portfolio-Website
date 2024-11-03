import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data/dummyData";
import logo from "../data/images/logo.png";
import { Menu } from "@mui/icons-material";
import { motion } from "framer-motion";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(scrollPosition > currentScrollPos || currentScrollPos < 10);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const handleMenuClick = () => {
    setResponsive(!responsive);
  };

  const handleLinkClick = () => {
    setResponsive(false);
  };

  return (
    <div>
      <header
        className={`bg-primaryBackground p-4 fixed top-0 left-0 w-screen z-[9999] shadow-md transition-transform duration-300 rounded-b-full max-md:rounded-b-3xl border-primaryColor border-b-2 border-solid ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="container flex justify-between items-center mx-auto">
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto max-md:h-7 max-md:pl-5 max-md:pb-1"
            />
          </div>

          <div className={`nav flex space-x-2 max-md:hidden`}>
            {navlink.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                }
                transition={{
                  duration: 0.3,
                  delay: isVisible ? i * 0.1 : 0,
                }}
              >
                <Link
                  to={val.url}
                  className="flex text-gray-200 no-underline transition duration-500 hover:text-primaryColor px-[20px] justify-center rounded-xl w-full py-4 hover:bg-black"
                >
                  {val.text}
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            className="md:hidden toggle border-none outline-none bg-primaryBackground text-white px-[18px] py-[9px] rounded-2xl"
            onClick={handleMenuClick}
          >
            <Menu className="icon" />
          </button>

          <motion.div
            className={`${
              responsive
                ? "flex flex-col border-primaryColor border-[1px] items-center absolute top-[10vh] w-[77%] bg-headingColor md:hidden left-[12%] my-2 rounded-lg z-[100]"
                : "hidden"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={responsive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navlink.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={
                  responsive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                }
                transition={{
                  duration: 0.3,
                  delay: responsive ? i * 0.1 : 0,
                }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Link
                  to={val.url}
                  className="flex text-gray-400 no-underline transition duration-500 hover:text-primaryColor max-md:my-1 px-[20px] justify-center rounded-xl w-full py-4 hover:bg-primaryBackground"
                  onClick={handleLinkClick}
                >
                  {val.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </header>
    </div>
  );
};
