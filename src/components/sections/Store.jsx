import React from "react";
import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Store = () => {
  return (
    <div className="flex flex-row items-center m-auto p-10 max-w-6xl">
      <div className="flex flex-col-reverse md:flex-row  items-center">
        <div>
          <h2
            className="text-[#3c3c3c] text-lg leading-7 font-bold"
            style={{ margin: "0 0 25px" }}
          >
            Learn anytime, anywhere.
          </h2>
          <div className="text-[#777] text-sm leading-normal mb-6 text-left">
            Make your breaks and commutes more productive with our iPhone and
            Android apps. Download them and see why Apple and Google gave us
            their highest accolades.
          </div>
          <div className="-mb-3 items-center flex md:flex-row flex-col w-full">
            <a
              href="https://apps.apple.com/app/id570060128?mt=8&pt=1374442&ct=Product+Test%3A+Mobile+web+download+banners+on+splash"
              target="_blank"
              className="cursor-pointer gap-3 border text-[#4b4b4b] border-[#4b4b4b] border-solid whitespace-nowrap justify-center items-center rounded-xl  hover:bg-[#E5E5E5] active:scale-95 inline-flex"
              style={{
                paddingBottom: "12px 16px",
                margin: "0 12px 12px 0",
                borderWidth: "2px 2px 4px",
                padding: "11px 18px",
              }}
            >
              <span className="mx-auto">
                <BsApple className="inline-block items-start h-[34px] w-[34px] mr-2" />
              </span>
              <span className="inline-block text-base font-bold leading-snug tracking-normal">
                <span className="grid">
                  <span className="text-xs">Download on the</span>
                  App Store
                </span>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?hl=en&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsplash"
              target="_blank"
              className="cursor-pointer gap-3 border text-[#4b4b4b] border-[#4b4b4b] border-solid whitespace-nowrap justify-center items-center rounded-xl inline-flex hover:bg-[#E5E5E5] active:scale-95"
              style={{
                paddingBottom: "12px 16px",
                margin: "0 12px 12px 0",
                borderWidth: "2px 2px 4px",
                padding: "11px 18px",
              }}
            >
              <span className="mx-auto ">
                <IoLogoGooglePlaystore className="inline-block h-[34px] w-[34px] mr-2" />
              </span>
              <span className="inline-block text-base font-bold leading-snug tracking-normal">
                <span className="grid">
                  <span className="text-xs">Get it on</span>
                  Google Play
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="lg:ml-12 object-contain flex-grow-0 bg-no-repeat flex mb-12">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/791b23bc8994589efad21ce964d99161.svg"
            alt="duolingo/travel"
            className="h-[220px] min-w-[192px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
