import React, { useState, useEffect } from "react";
import "./styles.scss";

import arrowLeft from "../../assets/chevron-left.svg";
import arrowRight from "../../assets/chevron-right.svg";
import ButtonUser from "./ButtonUser";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mainScrolled = document.querySelector(".main-container");

    mainScrolled.addEventListener("scroll", () => {
      if (mainScrolled.scrollTop >= 50) setIsScrolled(true);
      else setIsScrolled(false);
    });
  }, []);

  return (
    <header className={`main-header ${isScrolled ? "header-scrolled" : ""}`}>
      <button className="btn-arrow">
        <img src={arrowLeft} alt="go back" />
      </button>
      <button className="btn-arrow">
        <img src={arrowRight} alt="go forward" />
      </button>

      <ButtonUser />
    </header>
  );
};

export default MainHeader;
