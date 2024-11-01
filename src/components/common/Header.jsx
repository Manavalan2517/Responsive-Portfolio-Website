import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data/dummyData";
import logo from "../data/images/logo.png";
import { Menu } from "@mui/icons-material";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <div>
      <header className="bg-gray-100 p-4 z-[99]">
        <div className="container flex justify-between items-center mx-auto">
          <div className="logo">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div
            className={
              responsive
                ? "flex flex-col border-primaryColor border-[1px] items-center absolute top-[10vh] w-[77%] bg-headingColor md:hidden left-[12%] my-2 rounded-lg z-[100]"
                : "nav flex space-x-2 max-md:hidden"
            }
          >
            {navlink.map((val, i) => (
              <Link
                to={val.url}
                key={i}
                className="flex text-gray-700 no-underline transition duration-500 hover:text-primaryColor max-md:my-1 px-[20px] justify-center rounded-xl w-full py-4 hover:bg-primaryBackground"
              >
                {val.text}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden toggle border-none outline-none bg-primaryBackground text-white px-[18px] py-[9px] rounded-2xl max-md:visible"
            onClick={() => setResponsive(!responsive)}
          >
            <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </div>
  );
};
