import React from "react";
import "./styles.scss";

import Card from "../../../components/ui/Card";
import SectionHeader from "../../../components/ui/SectionHeader";

const ContentSection = ({ title = "", data = [], type = "album" }) => {
  function artistsArrayToString(arrayArtists) {
    let strResult = "";
    arrayArtists.forEach((artist, index) => {
      strResult += artist.name;
      if (index + 1 !== arrayArtists.length) strResult += ", ";
    });

    return strResult;
  }

  return (
    <section className="home-section">
      <SectionHeader type="link" title={title} />

      <div className="grid-cards">
        {type === "album" &&
          data.map((album) => (
            <Card
              className="grid-item"
              key={album.id}
              title={album.name}
              subtitle={artistsArrayToString(album.artists)}
              image={album.images[1].url}
            />
          ))}

        {type === "artist" &&
          data.map((artist) => (
            <Card
              className="grid-item"
              key={artist.id}
              title={artist.name}
              subtitle={"Artist"}
              image={artist.images[1].url}
              imageRounded={true}
            />
          ))}
      </div>
    </section>
  );
};

export default ContentSection;
