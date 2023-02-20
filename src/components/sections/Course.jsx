import React from "react";

const Course = () => {
  return (
    <div className="flex md:flex-row md:text-left text-center flex-col-reverse items-center m-auto p-10 max-w-6xl">
      <div className="inline-flex md:flex-row flex-col items-center justify-center">
        <div className="min-w-[185px] h-[164px] md:mr-12 md:mb-0 mb-12 bg-no-repeat inline-flex object-contain">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/efficacyPage/5b117228254f9a9d8c7f541734f18225.svg"
            alt="duolingo/course"
          />
        </div>
        <div className="w-full">
          <h2
            className="text-[#3c3c3c] text-2xl leading-6 font-bold"
            style={{ margin: "0 0 25px" }}
          >
            Effective and efficient courses
          </h2>
          <div className="text-[#777] text-lg leading-normal mb-6 text-left">
            Our courses effectively and efficiently teach reading, listening,
            and speaking skills. Check out our latest research!
          </div>
          <a
            href="https://en.duolingo.com/efficacy"
            target="_blank"
            className="text-[#1cb0f6] w-full cursor-pointer md:text-base text-sm font-bold md:tracking-widest uppercase hover:text-[#4BDCFF]"
          >
            Learn more about our research
          </a>
        </div>
      </div>
    </div>
  );
};

export default Course;
