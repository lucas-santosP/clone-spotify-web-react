import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
const InstallButton = () => {
  return (
    <button className="btn-install">
      <FontAwesomeIcon icon={faArrowAltCircleDown} color={"CurrentColor"} />
      Instalar aplicativo
    </button>
  );
};

export default InstallButton;
