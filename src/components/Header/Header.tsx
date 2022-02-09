// import React, { useState } from "react";
import "animate.css";
import "./Header.scss";

import myFace from "../../assets/images/myFace.png";
import gitHubIcon from "../../assets/icons/GitHub-Mark-64px.png";
import linkedInIcon from "../../assets/icons/LI-In-Bug.png";
import envelopeIcon from "../../assets/icons/envelope-solid.svg";

// export interface IHeaderProps {
//   name: String;
//   size: Number;
//   className?: string;
// }

// export interface IExtendedHeader extends IHeaderProps {
//   poop: () => void;
//   pee: String[];
// }

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
        <div className="socialLinks">
          {/* email */}

          <a href="mailto:jeremiahberndt@gmail.com">
            <img src={envelopeIcon} alt="link-to-email"></img>
          </a>
          {/* github */}
          <a href="https://github.com/JeremiahBerndt">
            <img src={gitHubIcon} alt="GitHub Profile"></img>
          </a>
          {/* linkedin */}
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="jeremiah-berndt"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://www.linkedin.com/in/jeremiah-berndt?trk=profile-badge"
            >
              <img src={linkedInIcon} alt="LinkedIn Profile"></img>
            </a>
          </div>
          {/* twitter */}
          <a
            href="https://twitter.com/JeremiahBerndt?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-size="large"
            data-show-screen-name="false"
            data-show-count="false"
          >
            Follow @JeremiahBerndt
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
