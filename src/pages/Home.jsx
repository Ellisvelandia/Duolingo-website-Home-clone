import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { flags } from "../data/flags";

const Home = () => {
  return (
    <div className="items-center flex relative w-full star home">
      <div className="relative lg:max-h-[1080px] h-full flex lg:flex-row flex-col items-center text-center mt-16 mx-auto p-10 sm:max-w-7xl w-full xl:my-20">
        <img
          className="md:min-w-[360px] min-w-[200px]"
          src="https://d35aaqx5ub95lt.cloudfront.net/images/331a32943ff73be28537dfc7469d5639.svg"
          alt="global"
        />
        <div className="mx-auto w-full mb-8">
          <h1 className="text-white font-bold leading-10 text-3xl m-0 lg:my-14 my-6 w-full ">
            The free, fun, and effective way to learn a <br /> language!
          </h1>
          <div className="flex items-center relative justify-center">
            <a
              href="https://en.duolingo.com/register"
              target="_blank"
              className="flex cursor-pointer border-solid border-transparent  p-4 h-12 rounded-2xl w-[320px] border-[#58a700] bg-[#58cc02] text-white uppercase leading-3 justify-center items-center font-bold whitespace-nowrap hover:bg-[#61E002] "
              style={{
                borderWidth: "2px 2px 6px",
                borderStyle: "solid",
                borderColor: "#58a700",
              }}
            >
              Get started
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="cursor-pointer bg-[#235390] border-[#042c60] text-[#fff] p-4 h-12 rounded-2xl w-[320px] my-4 text-sm border-solid border-transparent justify-center inline-flex items-center leading-3 uppercase whitespace-nowrap touch-manipulation text-center hover:bg-[#1F4B82]"
              style={{
                borderWidth: "2px 2px 6px",
                borderStyle: "solid",
                borderColor: "#042c60",
              }}
            >
              <span className="whitespace-nowrap uppercase _13HXc">
                I ALREADY HAVE AN ACCOUNT
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#0a4a82] absolute bottom-0 left-0 right-0 w-full xl:flex hidden">
        <nav className="items-center grid gridCol h-[74px] my-0 mx-auto lg:w-[1004px] w-full">
          <RiArrowLeftSLine className="text-white h-6 w-6 opacity-60 cursor-pointer" />
          <div className="overflow-hidden flex gap-4">
            {flags.map((flag) => (
              <ul
                className="flex gap-5"
                style={{
                  transform: "translateX(0px)",
                  transition: "transform .5s ease-in-out",
                }}
                key={flag.id}
              >
                <li className="list-none m-0 p-0">
                  <a
                    href={flag.href}
                    target="_blank"
                    className="items-center flex justify-center text-white decoration-0"
                  >
                    <img src={flag.image} alt="flag" className="h-7 w-9" />
                    <span className="text-base font-bold whitespace-nowrap uppercase tracking-widest">
                      {flag.name}
                    </span>
                  </a>
                </li>
              </ul>
            ))}
          </div>
          <RiArrowRightSLine className="text-white h-6 w-6 opacity-60 cursor-pointer" />
        </nav>
      </div>
    </div>
  );
};

export default Home;
