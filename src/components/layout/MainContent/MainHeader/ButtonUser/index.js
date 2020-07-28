import React, { useState } from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import userImg from "../../../../../assets/user.jpg";

const ButtonUser = () => {
  const [dropVisibility, setDropVisibility] = useState(false);

  function toggleDropdown(e) {
    e.stopPropagation();

    setDropVisibility(!dropVisibility);
    document.addEventListener("click", closeDropdown);
  }

  function closeDropdown(e) {
    e.stopPropagation();

    setDropVisibility(false);
    document.removeEventListener("click", closeDropdown);
  }

  function handleNavigation(e, destination) {
    e.stopPropagation();

    console.log("go to " + destination);
  }

  return (
    <button
      className={`btn-user ${dropVisibility ? "drop-open" : ""}`}
      onClick={toggleDropdown}
    >
      <div className="profile-pic-container">
        <img src={userImg} alt="Profile" />
      </div>
      <span>Lucas</span>

      <FontAwesomeIcon
        className={dropVisibility ? "drop-open" : ""}
        icon={faSortDown}
        color={"CurrentColor"}
      />

      {dropVisibility ? (
        <ul className="drop-down">
          <li onClick={(e) => handleNavigation(e, "conta")}>Conta</li>
          <li onClick={(e) => handleNavigation(e, "perfil")}>Perfil</li>
          <li onClick={(e) => handleNavigation(e, "sair")}>Sair</li>
        </ul>
      ) : null}
    </button>
  );
};

export default ButtonUser;
