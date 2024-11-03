import React from 'react'
import { Heading } from '../common/Heading'
import { blog } from '../data/dummyData'

export const Blog = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container">
        <Heading title="Blog" />
        <div className="content flex justify-center grid3 grid-cols-3 gap-8 text-center place-items-center">
          {blog.map((val) => {
            return (
              <div className="box bg-primaryBackground rounded-lg">
                <div className="img">
                  <img src={val.cover} alt="" className="w-[100%]" />
                </div>
                <div className="text px-[10px] py-[30px]">
                  <h3 className="font-semibold mb-2">{val.title}</h3>
                  <label className="text-left text-primaryColor">
                    By {val.author} {val.date}
                  </label>
                  <p className="text-left pt-5 text-greyDark">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
