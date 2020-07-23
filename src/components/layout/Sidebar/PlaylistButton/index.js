import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const PlaylistButton = ({ type = "add" }) => {
  return (
    <button className="playlistButton-container">
      <div className={`icon-bg ${type === "like" ? "bg-gradient" : ""}`}>
        {type === "like" ? (
          <FontAwesomeIcon icon={faHeart} color={"CurrentColor"} />
        ) : (
          <FontAwesomeIcon icon={faPlus} color={"#000"} />
        )}
      </div>
      <span>{type === "like" ? "Músicas Curtidas" : "Criar playlist"}</span>
    </button>
  );
};

export default PlaylistButton;
