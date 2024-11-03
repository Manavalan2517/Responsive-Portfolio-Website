import { Visibility } from "@mui/icons-material";
import { portfolio } from "../data/dummyData";
import React, { useState } from "react";
import { Heading } from "../common/Heading";

// Generate a unique list of categories
const allCategories = [
  "all",
  ...new Set(portfolio.map((item) => item.category)),
];

export const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setList(portfolio);
    } else {
      const filteredItems = portfolio.filter(
        (item) => item.category === category
      );
      setList(filteredItems);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <article className="mt-[70px] mb-[80px] transition">
        <div className="container w-[80%] pt-10 mx-auto transition">
          <Heading title="Portfolio" />
          <div className="catButton flex justify-center items-center my-10">
            {categories.map((category, index) => (
              <button
                key={index}
                className="capitalize primaryBtn ease-in-out w-[200px] mr-6 transition hover:-translate-y-1 hover:scale-105 duration-300 primaryBtn bg-none border-[2px] border-primaryColor hover:bg-primaryColor px-4 py-2 rounded-xl"
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid grid-cols-3 gap-8 text-center place-items-center">
            {list.map((item, i) => (
              <div key={i} className="box relative transition duration-500">
                <div className="img w-full h-full">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="overlay absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition duration-500 bg-primaryColor cursor-pointer">
                  <div className="text-white text-center">
                    <h3>{item.title}</h3>
                    <span>{item.name}</span> <br />
                    <Visibility />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
