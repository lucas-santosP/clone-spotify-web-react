import React from "react";
import "./styles.scss";

import limitTextLength from "../../../utils/limitTextLength";

const index = () => {
  return (
    <ul className="playlists-list">
      <li>{limitTextLength("Sono Profundo", 24)}</li>
      <li>{limitTextLength("Concentração Perfeita", 24)}</li>
      <li>{limitTextLength("Slowly i dissolve", 24)}</li>
      <li>{limitTextLength("Hora de dormir", 24)}</li>
      <li>{limitTextLength("M.O.O.N. - Dust [Official]", 24)}</li>
      <li>{limitTextLength("Sadness", 24)}</li>
      <li>{limitTextLength("Songs For Sleep: Peaceful mind", 24)}</li>
      <li>{limitTextLength("Life Is Strange [2015]", 24)}</li>
      <li>{limitTextLength("Curtidas na Rádio", 24)}</li>
      <li>{limitTextLength("Release me", 24)}</li>
    </ul>
  );
};

export default index;
