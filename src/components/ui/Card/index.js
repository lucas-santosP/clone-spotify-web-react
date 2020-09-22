import React from "react";
import "./styles.scss";

import { ReactComponent as PlayIcon } from "../../../assets/icons/play.svg";

const Card = ({ image, title, subtitle, className }) => {
  return (
    <div className={"card-container " + className}>
      <img className="cover-img" src={image} alt="Cover" />

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