import React from "react";
import "./App.scss";
import "animate.css";

import Header from "./components/Header";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Experience />
    </div>
  );
};

export default App;
