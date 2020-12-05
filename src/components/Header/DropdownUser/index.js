import React from "react";
import "./styles.scss";

import { cookies } from "../../../common/utils";
import { useStore } from "../../../store";

const DropdownUser = ({ visibility = false }) => {
  const { setToken } = useStore();

  function doLogout() {
    cookies.delete("token");
    setToken("");
  }

  if (visibility)
    return (
      <ul className="drop-down">
        <li className="drop-item">account</li>
        <li className="drop-item">Profile</li>
        <li className="drop-item" onClick={doLogout}>
          Log out
        </li>
      </ul>
    );
  else return null;
};

export default DropdownUser;
