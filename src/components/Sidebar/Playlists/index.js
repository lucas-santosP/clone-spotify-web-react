import React from "react";
import "./styles.scss";

import { limitTextLength } from "../../../common/utils";

const Playlists = () => {
  const playLists = [
    "Sono Profundo",
    "Concentração Perfeita",
    "Slowly I Dissolve",
    "Hora de dormir",
    "Songs for sleep: Peaceful mind",
    "Curtidas na Rádio",
    "Release Me",
    "Happiness",
    "Indie Stage",
    "This is The Weeknd",
    "Alternative",
    "Pop Rock",
    "Post Rock Essentials",
    "We Are Who We Are",
    "Hype songs",
    "Futuristic Electronic",
    "This is Kid Cudi",
  ];

  return (
    <ul className="playlists-list">
      {playLists.map((playlistName, index) => (
        <li key={playLists + index}>{limitTextLength(playlistName, 24)}</li>
      ))}
    </ul>
  );
};

export default Playlists;
