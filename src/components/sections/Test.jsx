import React from "react";

const Test = () => {
  return (
    <div className="flex md:flex-row justify-center md:text-left text-center flex-col-reverse items-center m-auto p-10 max-w-6xl">
      <div>
        <h2
          className="text-[#3c3c3c] text-2xl leading-6 font-bold"
          style={{ margin: "0 0 25px" }}
        >
          The Duolingo English Test
        </h2>
        <div className="text-[#777] flex-grow-0 text-lg leading-normal mb-6 text-left">
          Welcome to the convenient, fast, and affordable English test accepted
          around the world. By integrating the latest assessment science and AI,
          we empower anyone to take the test where and when they’re at their
          best.
        </div>
        <a
          href="https://englishtest.duolingo.com/"
          target="_blank"
          className="text-[#1cb0f6] cursor-pointer text-base font-bold tracking-widest uppercase hover:text-[#4BDCFF]"
        >
          CERTIFY YOUR ENGLISH
        </a>
      </div>
      <div className="h-[162px] min-w-[245px] ml-12 md:mb-0 mb-12 flex-grow-0 bg-no-repeat object-contain">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/9cb1bd734855384c2de08fe80443af9f.svg"
          alt="duolingo/test"
        />
      </div>
    </div>
  );
};

export default Test;
