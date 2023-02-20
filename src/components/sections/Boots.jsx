import React from "react";

const Boots = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center m-auto p-10 max-w-6xl">
      <img
        src="https://d35aaqx5ub95lt.cloudfront.net/images/super/8183c77cba99daf1e900fb5f9b0cc671.svg"
        alt="duolingo/multicolor"
        className="mr-12 flex-grow-0 border-none h-[180px] w-[185px] object-contain bg-no-repeat"
      />
      <div>
        <h2
          className="text-[#3c3c3c] text-xl leading-7 font-black"
          style={{ margin: "0 0 25px" }}
        >
          Boost your learning with Super Duolingo
        </h2>
        <div className="text-[#777] flex-grow text-base font-light leading-normal mb-6 text-left">
          Learning a language on Duolingo is completely free, but you can remove
          ads and support free education with Super. First 2 weeks on us!
        </div>
        <a
          href="https://en.duolingo.com/super"
          target="_blank"
          className="text-[#1cb0f6] cursor-pointer text-sm font-bold tracking-wider uppercase hover:text-[#22D3FF]"
          style={{ textDecoration: "none" }}
        >
          Learn more about Super Duolingo
        </a>
      </div>
    </div>
  );
};

export default Boots;
