import React, { useEffect, useState } from "react";
import "./styles.scss";

import { limitTextLength } from "../../../common/utils";

const ContentCard = ({ albumCover, albumTitle, artistName }) => {
  const [currentTextLimit, setCurrentTextLimit] = useState(16);

  function updateCurrentTextLimit() {
    const cardElement = document.querySelector(".album-card");
    setCurrentTextLimit(parseInt(cardElement.offsetWidth / 15));
  }

  useEffect(() => {
    updateCurrentTextLimit();
    window.addEventListener("resize", updateCurrentTextLimit);

    return () => {
      window.removeEventListener("resize", updateCurrentTextLimit);
    };
  }, []);

  return (
    <div className="album-card" title={artistName + " - " + albumTitle}>
      <img className="cover-img" src={albumCover} alt="Album Cover" />

      <span className="title">
        {limitTextLength(albumTitle, currentTextLimit)}
      </span>
      <span className="subtitle">{artistName}</span>

      <button className="btn-play">
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
