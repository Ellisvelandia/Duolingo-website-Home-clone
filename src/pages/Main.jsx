import React from "react";
import Boots from "../components/sections/Boots";
import Course from "../components/sections/Course";
import Efficacy from "../components/sections/Efficacy";
import Learning from "../components/sections/Learning";
import School from "../components/sections/School";
import Store from "../components/sections/Store";
import Test from "../components/sections/Test";

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
      <section className="bg-[#fff]">
        <Test />
      </section>
      <div className="separator"></div>
      <section className="bg-[#fff]">
        <Course />
      </section>
    </div>
  );
};

export default Main;
