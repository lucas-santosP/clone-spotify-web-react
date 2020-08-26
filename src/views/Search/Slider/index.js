import React, { useEffect } from "react";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ slides }) => {
  const gradients = [
    "(0deg,rgb(65, 0, 245,0.5),rgb(65, 0, 245))",
    "(0deg,rgb(235, 30, 50,0.5),rgb(235, 30, 50))",
    "(0deg,rgb(245, 155, 35,0.5),rgb(245, 155, 35))",
    "(0deg,rgb(195, 240, 200,0.5),rgb(195, 240, 200))",
  ];

  function slideTo(direction) {
    const sliderTrack = document.querySelector(".slider-track");
    const sliderTrackWidth = sliderTrack.scrollWidth;

    if (direction === "right") {
      sliderTrack.scrollBy(sliderTrackWidth / 4, 0);
    } else {
      sliderTrack.scrollBy(-(sliderTrackWidth / 4), 0);
    }
  }

  function updateSliderButtonsVisibility() {
    const sliderTrack = document.querySelector(".slider-track");
    const btnRight = document.querySelector(".btn-right");
    const btnLeft = document.querySelector(".btn-left");

    const minScroll = 0;
    const maxScroll = sliderTrack.scrollWidth;
    const currentScrollPosition = sliderTrack.scrollLeft;
    const sliderTrackWidth = sliderTrack.offsetWidth;

    if (sliderTrackWidth + currentScrollPosition >= maxScroll) {
      btnRight.style.visibility = "hidden";
    } else {
      btnRight.style.visibility = "visible";
    }

    if (currentScrollPosition <= minScroll) {
      btnLeft.style.visibility = "hidden";
    } else {
      btnLeft.style.visibility = "visible";
    }
  }

  useEffect(() => {
    const sliderTrack = document.querySelector(".slider-track");
    updateSliderButtonsVisibility();

    window.addEventListener("resize", updateSliderButtonsVisibility);
    sliderTrack.addEventListener("scroll", updateSliderButtonsVisibility);

    return () => {
      window.removeEventListener("resize", updateSliderButtonsVisibility);
      sliderTrack.removeEventListener("scroll", updateSliderButtonsVisibility);
    };
  }, []);

  return (
    <div className="slider-container">
      <button className="btn-left" onClick={() => slideTo("left")}>
        <FontAwesomeIcon icon={faChevronLeft} color={"#000"} />
      </button>

      <ul className="slider-track">
        {slides.map((slide, index) => (
          <li
            className="slide"
            key={slide.name + slide.reach}
            style={{
              background: `linear-gradient${gradients[index]}`,
            }}
          >
            <span className="slide-text">{slide.name}</span>
          </li>
        ))}
      </ul>

      <button className="btn-right" onClick={() => slideTo("right")}>
        <FontAwesomeIcon icon={faChevronRight} color={"#000"} />
      </button>
    </div>
  );
};

export default Slider;
