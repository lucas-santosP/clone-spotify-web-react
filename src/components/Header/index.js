import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ButtonUser from "./ButtonUser";

const MainHeader = () => {
  const history = useHistory();
  const [isScrolled, setIsScrolled] = useState(false);

  function updateIsScrolled() {
    if (document.querySelector(".app-main").scrollTop >= 50)
      setIsScrolled(true);
    else setIsScrolled(false);
  }

  function goBack() {
    history.goBack();
  }

  function goFoward() {
    history.goForward();
  }

  useEffect(() => {
    document
      .querySelector(".app-main")
      .addEventListener("scroll", updateIsScrolled);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? "header-scrolled" : ""}`}>
      <button className="btn-arrow" onClick={goBack}>
        <FontAwesomeIcon icon={faChevronLeft} color={"#fff"} />
      </button>
      <button className="btn-arrow" onClick={goFoward}>
        <FontAwesomeIcon icon={faChevronRight} color={"#fff"} />
      </button>

      <ButtonUser />
    </header>
  );
};

export default MainHeader;
