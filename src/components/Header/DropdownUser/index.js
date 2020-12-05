import React from "react";
import "./styles.scss";

const DropdownUser = ({ visibility = false }) => {
  if (visibility)
    return (
      <ul className="drop-down">
        <li className="drop-item">account</li>
        <li className="drop-item">Profile</li>
        <li className="drop-item">Log out</li>
      </ul>
    );
  else return null;
};

export default DropdownUser;
