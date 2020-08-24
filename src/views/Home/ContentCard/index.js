import React from "react";
import "./styles.scss";

import limitTextLength from "../../../common/utils/limitTextLength";
import coverImg from "../../../assets/cover-example.jfif";

const ContentCard = () => {
  return (
    <div className="content-card">
      <img className="cover-img" src={coverImg} alt="" />

      <span className="title">
        {limitTextLength("After Hours (Deluxe edition)", 16)}
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
