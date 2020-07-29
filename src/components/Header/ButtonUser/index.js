import React, { useState } from "react";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import userImg from "../../../assets/user.jpg";
import DropdownUser from "../DropdownUser";

const HeaderButtonUser = () => {
  const [dropVisibility, setDropVisibility] = useState(false);

  function toggleDropdown(e) {
    e.stopPropagation();

    setDropVisibility(!dropVisibility);
    if (!dropVisibility) document.addEventListener("click", closeDropdown);
  }

  function closeDropdown(e) {
    e.stopPropagation();

    setDropVisibility(false);
    document.removeEventListener("click", closeDropdown);
  }

  return (
    <button
      className={`btn-user ${dropVisibility ? "drop-is-open" : ""}`}
      onClick={toggleDropdown}
    >
      <div className="profile-pic-container">
        <img src={userImg} alt="Profile" />
      </div>

      <span className="user-name">Lucas</span>

      <FontAwesomeIcon
        className={`triangle-icon ${dropVisibility ? "drop-is-open" : ""}`}
        icon={faSortDown}
        color={"CurrentColor"}
      />

      <DropdownUser visibility={dropVisibility} />
    </button>
  );
};

export default HeaderButtonUser;
