import React, { useState, useEffect } from "react";
import "./styles.scss";

const AudioProgress = (props) => {
  const audioLength = minuteToSecond(props.audioLength || "2:00");
  const isPlaying = props.isPlaying || true;

  const [currentSecond, setCurrentSecond] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);

  function updateProgress(e) {
    const newPercent = parseFloat(e.target.value, 10);
    setCurrentPercent(newPercent);

    const newSecond = (newPercent * audioLength) / 100;
    setCurrentSecond(newSecond);
  }
  function secondsToMinute(duration) {
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;
    let result = "";

    if (hrs > 0) result += "" + hrs + ":" + (mins < 10 ? "0" : "");
    result += "" + mins + ":" + (secs < 10 ? "0" : "");
    result += "" + secs;
    return result;
  }
  function minuteToSecond(minute) {
    var parts = minute.split(":"),
      minutes = +parts[0],
      seconds = +parts[1];
    return (minutes * 60 + seconds).toFixed(3);
  }

  useEffect(() => {
    const newPercentValue = (currentSecond * 100) / audioLength;
    setCurrentPercent(newPercentValue);
  }, [currentSecond, audioLength]);

  useEffect(() => {
    let isDragging = false;
    const inputRange = document.querySelector(".input-range");

    inputRange.addEventListener("mousedown", () => (isDragging = true));
    inputRange.addEventListener("mouseup", () => (isDragging = false));

    function updateProgressWhenPlaying() {
      if (!isDragging && isPlaying) {
        setCurrentSecond((currentSecond) => {
          return currentSecond < audioLength
            ? currentSecond + 0.1
            : audioLength;
        });
      }
    }

    setInterval(updateProgressWhenPlaying, 100);
  }, []);

  return (
    <div className="input-range-container">
      <input
        className="input-range"
        step="0.1"
        type="range"
        min="0"
        max="100"
        value={currentPercent}
        onChange={updateProgress}
      />
      <div className="progress-bar back"></div>
      <div
        className="progress-bar front"
        style={{
          width: currentPercent + "%",
        }}
      ></div>

      <span className="time-text current-time">
        {secondsToMinute(currentSecond)}
      </span>
      <span className="time-text max-time">{secondsToMinute(audioLength)}</span>
    </div>
  );
};

export default AudioProgress;
