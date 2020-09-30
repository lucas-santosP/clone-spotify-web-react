import React from "react";
import "./styles.scss";

const Playlists = () => {
  const playLists = [
    "Deep sleep",
    "Concentration",
    "Slowly I Dissolve",
    "Time to Sleep",
    "Songs for sleep: Peaceful mind",
    "Liked from radio",
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
        <li key={playLists + index} title={playlistName}>
          {playlistName}
        </li>
      ))}
    </ul>
  );
};

export default Playlists;
