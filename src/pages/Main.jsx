import React from "react";
import Boots from "../components/sections/Boots";
import Efficacy from "../components/sections/Efficacy";
import Learning from "../components/sections/Learning";
import School from "../components/sections/School";
import Store from "../components/sections/Store";

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
      <section className="bg-[#fff]">
        <Boots />
      </section>
      <div className="separator"></div>
      <section className="bg-[#fff]">
        <Store />
      </section>
      <div className="separator"></div>
      <section className="bg-[#fff]">
        <School />
      </section>
      <div className="separator"></div>
    </div>
  );
};

export default Main;
