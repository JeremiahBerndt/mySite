// import { FC } from "react";
import React, { useState } from "react";
import "animate.css";

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
      <div className="name">
        <h1>
          Jeremiah <span>Berndt</span>
        </h1>
        <h3>Software Engineer</h3>
      </div>
      <div>
        <h3>
          <a href="mailto:jeremiahberndt@gmail.com">Jeremiah</a>
        </h3>
        {/* <a href="https://www.linkedin.com/in/jeremiah-berndt/">LinkedIn</a> */}
      </div>
    </section>
  );
};

export default Header;
