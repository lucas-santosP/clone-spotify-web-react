import React, { useState, useEffect } from "react";
import "./styles.scss";

import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as HomeSelectedIcon } from "../../../assets/icons/home-selected.svg";
import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as SearchSelectedIcon } from "../../../assets/icons/search-selected.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as LibrarySelectedIcon } from "../../../assets/icons/library-selected.svg";
import { ReactComponent as LibraryIcon } from "../../../assets/icons/library.svg";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("inicio");

  function changeCurrentPage(path) {
    if (location.pathname !== path) {
      history.push(path);
    }
  }

  useEffect(() => {
    setCurrentPage(location.pathname);
    document.querySelector(".app-main").scrollTop = 0;
  }, [location.pathname]);

  return (
    <ul className="navigation-list">
      <li
        onClick={() => changeCurrentPage("/home")}
        className={currentPage === "/home" ? "active" : ""}
      >
        {currentPage === "/home" ? <HomeSelectedIcon /> : <HomeIcon />}
        <span className="text">Início</span>
      </li>
      <li
        onClick={() => changeCurrentPage("/search")}
        className={currentPage === "/search" ? "active" : ""}
      >
        {currentPage === "/search" ? <SearchSelectedIcon /> : <SearchIcon />}
        <span className="text">Buscar</span>
      </li>
      <li
        onClick={() => changeCurrentPage("/my-library")}
        className={currentPage === "/my-library" ? "active" : ""}
      >
        {currentPage === "/my-library" ? (
          <LibrarySelectedIcon />
        ) : (
          <LibraryIcon />
        )}
        <span className="text">Sua Biblioteca</span>
      </li>
    </ul>
  );
};

export default Navigation;
