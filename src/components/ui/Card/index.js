import React from "react";
import "./styles.scss";

import { ReactComponent as PlayIcon } from "../../../assets/icons/play.svg";

const Card = ({ image, title, subtitle, className, imageRounded = false }) => {
  return (
    <div className={"card-container " + className}>
      <img
        className="cover-img"
        src={image}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://lastfm.freetls.fastly.net/i/u/300x300/4128a6eb29f94943c9d206c08e625904.webp";
        }}
        alt="Cover"
        style={{ borderRadius: imageRounded ? "50%" : "" }}
      />

      <span className="title" title={title}>
        <span>{title}</span>
      </span>
      <span className="subtitle">{subtitle}</span>

      <button className="btn-play" title="Play">
        <PlayIcon />
      </button>
    </div>
  );
};

export default Card;
