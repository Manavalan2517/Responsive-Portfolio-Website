import React from "react";
function CreativeBtn2({ link }) {
  return (
    <a href={link}>
      <div className="text-base dark:text-white text-blue-600 font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1 transition-all duration-300">
        <div className="group relative cursor-pointer p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
          <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
            Github
          </span>
          <div className="flex gap-2 text-white bg-green-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
            <span>Github</span>
          </div>
        </div>
      </div>
    </a>
  );
}
export default CreativeBtn2;
