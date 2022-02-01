import React from "react";
import "./App.scss";
import "animate.css";

import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Contact />
      {/* <Projects /> */}
    </div>
  );
};

export default App;
