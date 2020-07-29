import React from "react";
import "./styles.scss";

const DropdownUser = ({ visibility = false }) => {
  function handleNavigation(e, destination) {
    e.stopPropagation();
    console.log("go to " + destination);
  }

  if (visibility)
    return (
      <ul className="drop-down">
        <li onClick={(e) => handleNavigation(e, "conta")}>Conta</li>
        <li onClick={(e) => handleNavigation(e, "perfil")}>Perfil</li>
        <li onClick={(e) => handleNavigation(e, "sair")}>Sair</li>
      </ul>
    );
  else return null;
};

export default DropdownUser;
