import React from "react";
import "./styles.scss";

import ContentCard from "../ContentCard";
import SectionHeader from "../../../components/ui/SectionHeader";

const ContentSection = ({ title = "", albums = [] }) => {
  function normalizeImageSource(url) {
    const lastIndex = url.lastIndexOf(".");
    return url.substr(0, lastIndex);
  }
  return (
    <section className="section-container">
      <SectionHeader type="link" title={title} linkTo="#" />

      <div className="section-cards">
        {albums.map((album) => (
          <ContentCard
            key={album.mbid + album.name}
            albumTitle={album.name}
            artistName={album.artist.name}
            albumCover={normalizeImageSource(album.image[2]["#text"])}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
