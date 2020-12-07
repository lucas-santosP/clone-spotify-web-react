import React from "react";
import "./styles.scss";

import { ReactComponent as PlayIcon } from "../../../assets/icons/play.svg";
import defaultCover from "../../../assets/default-cover.webp";

const Card = ({
  image,
  title,
  subtitle,
  subtitleLink = "",
  className,
  imageRounded = false,
}) => {
  return (
    <div className={"card-container " + className}>
      <img
        className="cover-img"
        src={image}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultCover;
        }}
        alt="Cover"
        style={{ borderRadius: imageRounded ? "50%" : "" }}
      />

      <span className="title" title={title}>
        <span>{title}</span>
      </span>
      <span className={`subtitle ${subtitleLink ? "subtitle-link" : ""}`}>
        {subtitle}
      </span>

      <button className="btn-play" title="Play">
        <PlayIcon />
      </button>
    </div>
  );
};

export default Card;
