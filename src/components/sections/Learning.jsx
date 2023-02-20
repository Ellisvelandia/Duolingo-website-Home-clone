import React from "react";

const Learning = () => {
  return (
    <div className="flex flex-col items-center m-auto p-10 max-w-6xl">
      <div
        style={{
          backgroundSize: "245px",
          margin: " 0 auto 48px",
        }}
        className="min-w-[245px] w-[245px] h-[161px] flex lg:hidden"
      >
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/3816ddfd0658efd7bb713fd823053b82.svg"
          alt="cmputer"
        />
      </div>
      <h2
        className="text-2xl leading-6 text-[#3c3c3c] font-bold"
        style={{ margin: "0 0 25px" }}
      >
        Why you’ll love learning with Duolingo
      </h2>
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col flex-grow pt-12">
          <div className="flex">
            <div
              style={{
                backgroundSize: "43px",
                backgroundRepeat: "no-repeat",
              }}
              className="-mt-2 inline-block h-[43px] min-w-[43px]"
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/1994201dce8a55a0017d59b58a035fc3.svg"
                alt="fire"
              />
            </div>
            <div
              className="flex flex-col"
              style={{ padding: "5px 0px 18px 15px" }}
            >
              <h3
                className="text-base font-bold"
                style={{ margin: "0 0 10px" }}
              >
                Effective and efficient
              </h3>
              <div className="text-[#777] text-sm leading-relaxed">
                <span>
                  Our courses effectively and efficiently teach reading,
                  listening, and speaking skills. Check out our{" "}
                  <a
                    href="https://en.duolingo.com/efficacy"
                    target="_blank"
                    className="font-bold text-[#1cb0f6]"
                  >
                    latest research
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex">
            <div
              style={{
                backgroundSize: "43px",
                backgroundRepeat: "no-repeat",
              }}
              className="-mt-2 inline-block h-[43px] min-w-[43px]"
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/8f1e99a540ab7afcf5915e8852024e4c.svg"
                alt="check"
              />
            </div>

            <div
              className="flex flex-col"
              style={{ padding: "5px 0px 18px 15px" }}
            >
              <h3
                className="text-base font-bold"
                style={{ margin: "0 0 10px" }}
              >
                Personalized learning
              </h3>
              <div className="text-[#777] text-sm leading-relaxed">
                Combining the best of AI and language science, lessons are
                tailored to help you learn at just the right level and pace.
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundSize: "245px",
            margin: "auto 48px",
          }}
          className="min-w-[245px] w-[245px] h-[161px] lg:flex hidden"
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/3816ddfd0658efd7bb713fd823053b82.svg"
            alt="cmputer"
          />
        </div>
        <div className="flex flex-col flex-grow pt-12">
          <div className="flex">
            <div
              style={{
                backgroundPosition: "50%",
                backgroundSize: "75%",
                backgroundRepeat: "no-repeat",
              }}
              className="-mt-2 inline-block h-11 min-w-[43px]"
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/ebdcc22deaf0f85388fcb09e7ecfbe78.svg"
                alt="crowl"
              />
            </div>
            <div
              className="flex flex-col text-left"
              style={{ padding: "5px 0 18px 15px" }}
            >
              <h3 className="text-lg font-bold" style={{ margin: "0 0 10px" }}>
                Stay motivated
              </h3>
              <div className="text-[#777] text-sm leading-relaxed">
                We make it easy to form a habit of language learning, with
                game-like features, fun challenges, and reminders from our
                friendly mascot, Duo the owl.
              </div>
            </div>
          </div>

          <div className="flex">
            <div
              style={{
                backgroundPosition: "50%",
                backgroundSize: "75%",
                backgroundRepeat: "no-repeat",
              }}
              className="-mt-2 inline-block h-11 min-w-[43px]"
            >
              {" "}
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/a4d5fab3d1926c240cb2ae696b07d156.svg"
                alt=""
              />
            </div>
            <div
              className="flex flex-col text-left"
              style={{ padding: "5px 0 18px 15px" }}
            >
              <h3 className="text-lg font-bold" style={{ margin: "0 0 10px" }}>
                Have fun with it!
              </h3>
              <div className="text-[#777] text-sm leading-relaxed">
                Effective learning doesn’t have to be boring! Build your skills
                each day with engaging exercises and playful characters.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
