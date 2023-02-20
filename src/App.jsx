import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <Home />
      <main>
        <Main />
      </main>
    </div>
  );
};

export default App;
