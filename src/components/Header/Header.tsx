import React, { useState } from "react";
import "animate.css";
import "./Header.scss";

import myFace from "../../assets/images/myFace.png";
import gitHubIcon from "../../assets/icons/GitHub-Mark-64px.png";

export interface IHeaderProps {
  name: String;
  size: Number;
  className?: string;
}

export interface IExtendedHeader extends IHeaderProps {
  poop: () => void;
  pee: String[];
}

const Header = () => {
  // const [test, setTest] = useState<String | null>(null)

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {target} = e;
  //   const value = target.value
  // }

  return (
    <section className="header">
      <div className="myName">
        <h1>
          Jeremiah <span>Berndt</span>
        </h1>
        <h3>Software Engineer</h3>
        <div>
          <a href={gitHubIcon}>
            <img
              src="https://github.com/JeremiahBerndt"
              alt="GitHub Profile"
            ></img>
          </a>
        </div>
      </div>
      <div className="myFace">
        <img src={myFace} alt="my face"></img>
        <p>&nbsp;</p>
      </div>
    </section>
  );
};

export default Header;
