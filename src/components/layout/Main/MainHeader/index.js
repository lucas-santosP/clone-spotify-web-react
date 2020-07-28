import React from "react";
import "./styles.css";

import arrowLeft from "../../../../assets/chevron-left.svg";
import arrowRight from "../../../../assets/chevron-right.svg";
import ButtonUser from "./ButtonUser";

const MainHeader = () => {
  return (
    <header>
      <button className="btn-navigation">
        <img src={arrowLeft} alt="goback" />
      </button>
      <button className="btn-navigation">
        <img src={arrowRight} alt="gofoward" />
      </button>

      <ButtonUser />
    </header>
  );
};

export default MainHeader;
