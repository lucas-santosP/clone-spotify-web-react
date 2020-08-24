/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./styles.scss";

import InputRange from "../InputRange";

const AudioProgress = ({isPlaying, audioLength = "2:00"}) => { 
  const audioLengthInSeconds = minuteToSecond(audioLength);


  const [currentSecond, setCurrentSecond] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);

  function updateProgress(e) {
    const newPercent = parseFloat(e.target.value, 10);
    setCurrentPercent(newPercent);

    const newSecond = (newPercent * audioLengthInSeconds) / 100;
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
    const newPercentValue = (currentSecond * 100) / audioLengthInSeconds;
    setCurrentPercent(newPercentValue);
  }, [currentSecond, audioLengthInSeconds]);

  
  let isDragging = false;
  useEffect(() => {
    const inputRange = document.querySelector("#audio-progress");
    inputRange.addEventListener("mousedown", () => (isDragging = true));
    inputRange.addEventListener("mouseup", () => (isDragging = false));

  }, [isPlaying]);
  
  useEffect(() => { 
    function updateProgressWhenPlaying() {
      if (!isDragging && isPlaying) {
        setCurrentSecond((currentSecond) => {
          return currentSecond < audioLengthInSeconds
            ? currentSecond + 0.1
            : audioLengthInSeconds;
        });
      }
    }
    setInterval(updateProgressWhenPlaying, 100);
    
  },[])

  return (
    <div className="audio-progress-container">
      <span className="time-text current-time">
        {secondsToMinute(currentSecond)}
      </span>

      <InputRange
        id={"audio-progress"}
        value={currentPercent}
        onChange={updateProgress}
      />

      <span className="time-text max-time">{secondsToMinute(audioLengthInSeconds)}</span>
    </div>
  );
};

export default AudioProgress;
