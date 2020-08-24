import React, { useEffect } from "react";
import "./styles.scss";

import getRandomColor from "../../../common/utils/getRandomColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ slides }) => {
  function slideScrollX(direction) {
    const sliderTrack = document.querySelector(".slider-track");

    if (direction === "right")
      sliderTrack.scrollBy(sliderTrack.scrollWidth / 2, 0);
    else sliderTrack.scrollBy(-(sliderTrack.scrollWidth / 2), 0);
  }

  function handleSlideScroll() {
    const sliderTrack = document.querySelector(".slider-track");
    const btnRight = document.querySelector(".btn-right");
    const btnLeft = document.querySelector(".btn-left");

    const minScroll = 0;
    const maxScroll = sliderTrack.scrollWidth;
    const currentScrollPosition = sliderTrack.scrollLeft;
    const sliderTrackWith = sliderTrack.offsetWidth;

    if (sliderTrackWith + currentScrollPosition >= maxScroll)
      btnRight.style.visibility = "hidden";
    else btnRight.style.visibility = "visible";

    if (currentScrollPosition <= minScroll) btnLeft.style.visibility = "hidden";
    else btnLeft.style.visibility = "visible";
  }

  useEffect(() => {
    handleSlideScroll();

    document
      .querySelector(".slider-track")
      .addEventListener("scroll", handleSlideScroll);
  }, []);

  return (
    <div className="slider-container">
      <button className="btn-left" onClick={() => slideScrollX("left")}>
        <FontAwesomeIcon icon={faChevronLeft} color={"#000"} />
      </button>

      <ul className="slider-track">
        {slides.map((slide) => (
          <li
            className="slide"
            key={slide.name + slide.reach}
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <span>{slide.name}</span>
          </li>
        ))}
      </ul>

      <button className="btn-right" onClick={() => slideScrollX("right")}>
        <FontAwesomeIcon icon={faChevronRight} color={"#000"} />
      </button>
    </div>
  );
};

export default Slider;
