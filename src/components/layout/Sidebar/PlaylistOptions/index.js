import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const PlaylistOptions = () => {
  return (
    <div className="playlists-options">
      <h2>PLAYLISTS</h2>
      <button>
        <div className="icon-bg">
          <FontAwesomeIcon icon={faPlus} color={"#000"} />
        </div>
        <span>Criar playlist</span>
      </button>

      <button>
        <div className="icon-bg bg-gradient">
          <FontAwesomeIcon icon={faHeart} color={"CurrentColor"} />
        </div>
        <span>Músicas Curtidas</span>
      </button>
    </div>
  );
};

export default PlaylistOptions;
