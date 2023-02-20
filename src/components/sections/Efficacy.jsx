import React from "react";

const Efficacy = () => {
  return (
    <div className="flex flex-row items-center m-auto md:text-left text-center p-10 max-w-6xl">
      <div className="ml-6 flex lg:flex-row flex-col w-full">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/776364e6419216ffd84ddf8d8815711b.svg"
          alt="duolingo"
          className="h-[145px] min-h-[185px] md:mr-12 flex-grow-0 object-contain  xl:mb-0 mb-12"
        />
        <div className="w-full"> 
          <h2
            className="font-bold text-[#3c3c3c] tracking-widest text-2xl leading-7"
            style={{ margin: "0 0 25px" }}
          >
            The world’s #1 way to learn a language
          </h2>
          <div className="text-[#777] flex-grow text-left mb-6 text-lg">
            {" "}
            <span>
              <span>
                Learning with Duolingo is fun, and{" "}
                <a
                  href="https://en.duolingo.com/efficacy"
                  target="_blank"
                  className="underline font-bold text-black"
                >
                  research shows that it works
                </a>{" "}
                ! With quick, bite-sized lessons, you’ll earn points and unlock
                new levels while gaining real-world communication skills.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Efficacy;
