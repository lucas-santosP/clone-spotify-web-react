import React, { useState } from "react";
import "./styles.scss";

import coverImg from "../../../assets/cover-example.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const AudioInfo = () => {
  const [isLoved, setIsLoved] = useState(true);

  function toggleLoveState() {
    setIsLoved(!isLoved);
  }
  return (
    <div className="audio-info-container">
      <img className="img-cover" src={coverImg} alt="cover" />

      <div className="text">
        <span className="name">Save Your Tears</span>
        <span className="artist">The Weeknd</span>
      </div>

      <aside>
        <button
          className={`btn-love ${isLoved ? "active" : ""}`}
          onClick={toggleLoveState}
        >
          <FontAwesomeIcon
            icon={isLoved ? faHeart : faHeartRegular}
            color={"CurrentColor"}
          />
        </button>
      </aside>
    </div>
  );
};

export default AudioInfo;
