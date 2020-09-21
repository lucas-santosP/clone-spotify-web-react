import React from "react";
import "./styles.scss";

import Card from "../../../components/ui/Card";
import SectionHeader from "../../../components/ui/SectionHeader";

const ContentSection = ({ title = "", albums = [] }) => {
  function normalizeImageSource(url) {
    const lastIndex = url.lastIndexOf(".");
    return url.substr(0, lastIndex);
  }

  return (
    <section className="home-section">
      <SectionHeader type="link" title={title} />

      <div className="grid-cards">
        {albums.map((album) => (
          <Card
            className="grid-item"
            key={album.mbid + album.name}
            title={album.name}
            subtitle={album.artist.name}
            image={normalizeImageSource(album.image[2]["#text"])}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
