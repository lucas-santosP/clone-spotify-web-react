import React, { useEffect, useState } from "react";
import "./styles.scss";

import { limitTextLength } from "../../../common/utils";
import coverImg from "../../../assets/cover-example.jfif";

const ContentCard = () => {
  const [currentTextLimit, setCurrentTextLimit] = useState(16);

  function updateCurrentTextLimit() {
    const cardElement = document.querySelector(".content-card");
    setCurrentTextLimit(parseInt(cardElement.offsetWidth / 12));
  }

  useEffect(() => {
    updateCurrentTextLimit();
    window.addEventListener("resize", updateCurrentTextLimit);

    return () => {
      window.removeEventListener("resize", updateCurrentTextLimit);
    };
  }, []);

  return (
    <div className="content-card" title="After Hours (Deluxe edition)">
      <img className="cover-img" src={coverImg} alt="" />

      <span className="title">
        {limitTextLength(
          "After Hours (Deluxe edition)asdasdasd",
          currentTextLimit
        )}
      </span>
      <span className="subtitle">The Weeknd</span>

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
