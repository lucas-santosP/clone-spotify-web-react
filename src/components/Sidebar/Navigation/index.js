import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./styles.scss";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState("inicio");

  function changeCurrentPage(path) {
    history.push(path);
  }

  useEffect(() => {
    setCurrentPage(location.pathname);
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
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="currentColor"
            fillRule="evenodd"
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
            d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="text">Sua Biblioteca</span>
      </li>
    </ul>
  );
};

export default Navigation;
