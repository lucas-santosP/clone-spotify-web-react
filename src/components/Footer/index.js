import React, { useState } from "react";
import "./styles.scss";

import coverImg from "../../assets/cover-example.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPlay,
  faPause,
  faRandom,
  faStepBackward,
  faStepForward,
  faReplyAll,
  faList,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

import AudioProgress from "./AudioProgress";

const Footer = () => {
  const [isPlaying, setPlayingState] = useState(false);

  function togglePlayingState() {
    setPlayingState(!isPlaying);
  }

  return (
    <footer className="footer">
      <div className="audio-info">
        <img className="img-cover" src={coverImg} alt="cover" />

        <div className="text">
          <span className="name">Save Your Tears</span>
          <span className="artist">The Weeknd</span>

          <button className="btn-love">
            <FontAwesomeIcon icon={faHeart} color={"CurrentColor"} />
          </button>
        </div>
      </div>

      <div className="audio-controls">
        <div className="btn-group">
          <button className="btn-secondary btn-random">
            <FontAwesomeIcon icon={faRandom} />
          </button>

          <button className="btn-primary btn-back">
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button className="btn-primary btn-play" onClick={togglePlayingState}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
          <button className="btn-primary btn-forward">
            <FontAwesomeIcon icon={faStepForward} />
          </button>

          <button className="btn-secondary btn-repeat">
            <FontAwesomeIcon icon={faReplyAll} />
          </button>
        </div>

        <AudioProgress />
      </div>

      <div className="options">
        <button className="btn">
          <FontAwesomeIcon icon={faList} />
        </button>
        <button className="btn">
          <FontAwesomeIcon icon={faVolumeUp} />
        </button>

        <input type="range" className="volume-range" />
      </div>
    </footer>
  );
};

export default Footer;
