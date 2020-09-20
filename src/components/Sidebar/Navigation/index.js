import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./styles.scss";

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
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="text">Início</span>
      </li>
      <li
        onClick={() => changeCurrentPage("/search")}
        className={currentPage === "/search" ? "active" : ""}
      >
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="text">Buscar</span>
      </li>
      <li
        onClick={() => changeCurrentPage("/my-library")}
        className={currentPage === "/my-library" ? "active" : ""}
      >
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="text">Sua Biblioteca</span>
      </li>
    </ul>
  );
};

export default Navigation;
