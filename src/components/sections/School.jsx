import React from "react";

const School = () => {
  return (
    <div className="flex md:flex-row flex-col items-center m-auto p-10 max-w-6xl">
      <div className="h-[162px] md:mb-0 mb-12 min-w-[245px] md:mr-12 bg-no-repeat object-contain flex-grow-0">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/af5bf404fb8ea1ff96fdc9247a1e36e0.svg"
          alt="computer school"
        />
      </div>
      <div>
        <h2
          className="text-[#3c3c3c] text-2xl leading-6 font-bold"
          style={{ margin: "0 0 25px" }}
        >
          Duolingo for Schools
        </h2>
        <div className="text-[#777] text-lg leading-normal mb-6 text-left">
          Free teacher tools to help students learn languages through the
          Duolingo app, both in and out of the classroom.
        </div>
        <a
          href="https://schools.duolingo.com/"
          target="_blank"
          className="text-[#1cb0f6;] cursor-pointer text-sm tracking-widest uppercase hover:text-[#4BDCFF]"
        >
          Bring Duolingo to your classroom
        </a>
      </div>
    </div>
  );
};

export default School;
