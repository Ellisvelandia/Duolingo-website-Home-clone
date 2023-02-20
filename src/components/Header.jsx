import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full bg-[#235390] bg-repeat-x fixed top-0 z-10 py-0 px-10">
      <div className="max-w-7xl m-auto py-0 px-6 min-h-[70px]">
        <a
          href="https://www.duolingo.com/"
          target="_blank"
          className="float-left mt-4"
        >
          <img
            alt="Duolingo"
            className="h-9"
            src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg"
          ></img>
        </a>
        <div className="items-center flex float-right h-16">
          <div className="mr-6 relative cursor-pointer ring-offset-8">
            <button className="relative touch-manipulation text-white items-center flex gap-1">
              <span className="uppercase whitespace-nowrap text-base p-0 leading-3 font-bold">
                Site language:English
              </span>
              <IoIosArrowDown className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
