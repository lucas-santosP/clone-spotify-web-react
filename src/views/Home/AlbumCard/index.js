import React from "react";
import "./styles.scss";

import { ReactComponent as PlayIcon } from "../../../assets/icons/play.svg";

const ContentCard = ({ albumCover, albumTitle, artistName }) => {
  return (
    <div className="album-card">
      <img className="cover-img" src={albumCover} alt="Album Cover" />

      <span className="title" title={albumTitle}>
        <span>{albumTitle}</span>
      </span>
      <span className="subtitle">{artistName}</span>

      <button className="btn-play" title="Play">
        <PlayIcon />
      </button>
    </div>
  );
};

export default ContentCard;
