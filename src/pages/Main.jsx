import React from "react";
import Efficacy from "../components/sections/Efficacy";
import Learning from "../components/sections/Learning";

const Main = () => {
  return (
    <div className="min-h-[100vh]">
      <section className="mt-3 bg-[#fff]">
        <Efficacy />
      </section>
      <div className="separator"></div>
      <section className="bg-[#fff]">
        <Learning />
      </section>
      <div className="separator"></div>
    </div>
  );
};

export default Main;
