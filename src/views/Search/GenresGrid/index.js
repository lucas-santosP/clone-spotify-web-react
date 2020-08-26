import React from "react";
import "./styles.scss";

import { generateRandomColor, generateGradient } from "../../../common/utils";

const GenresGrid = ({ genres }) => {
  return (
    <ul className="genres-grid-container">
      {genres.map((genres) => (
        <li
          className="grid-item"
          key={genres.name + genres.reach}
          style={{ background: generateGradient(generateRandomColor()) }}
        >
          <span className="grid-text">{genres.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default GenresGrid;
