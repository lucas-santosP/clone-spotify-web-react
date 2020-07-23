import React from "react";
import "./styles.css";

const index = () => {
  function limitTextLength(text, limit = 24) {
    if (text.length > limit) {
      let result = text.substring(0, limit);
      result += " ...";
      return result;
    }
    return text;
  }

  return (
    <ul className="playlists-ul">
      <li className="playlist-item">{limitTextLength("Sono Profundo")}</li>
      <li className="playlist-item">
        {limitTextLength("Concentração Perfeita")}
      </li>
      <li className="playlist-item">{limitTextLength("Slowly i dissolve")}</li>
      <li className="playlist-item">{limitTextLength("Hora de dormir")}</li>
      <li className="playlist-item">
        {limitTextLength("M.O.O.N. - Dust [Official]")}
      </li>
      <li className="playlist-item">{limitTextLength("Sadness")}</li>
      <li className="playlist-item">
        {limitTextLength("Songs For Sleep: Peaceful mind")}
      </li>

      <li className="playlist-item">
        {limitTextLength("Life Is Strange [2015]")}
      </li>
      <li className="playlist-item">{limitTextLength("Curtidas na Rádio")}</li>
      <li className="playlist-item">{limitTextLength("Release me")}</li>
    </ul>
  );
};

export default index;
