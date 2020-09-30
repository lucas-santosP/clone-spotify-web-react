import React from "react";
import "./styles.scss";

const DropdownUser = ({ visibility = false }) => {
  if (visibility)
    return (
      <ul className="drop-down">
        <li>account</li>
        <li>Profile</li>
        <li>log out</li>
      </ul>
    );
  else return null;
};

export default DropdownUser;
