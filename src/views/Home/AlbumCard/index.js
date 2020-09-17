import React from "react";
import "./styles.scss";

const ContentCard = ({ albumCover, albumTitle, artistName }) => {
  return (
    <div className="album-card">
      <img className="cover-img" src={albumCover} alt="Album Cover" />

      <span className="title" title={albumTitle}>
        <span>{albumTitle}</span>
      </span>
      <span className="subtitle">{artistName}</span>

      <button className="btn-play" title="Play">
        <svg height="16" role="img" width="16" viewBox="0 0 24 24">
          <polygon
            points="21.57 12 5.98 3 5.98 21 21.57 12"
            fill="#fff"
          ></polygon>
        </svg>
      </button>
    </div>
  );
};

export default ContentCard;
