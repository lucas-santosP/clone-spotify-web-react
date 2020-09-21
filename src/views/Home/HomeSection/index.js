import React from "react";
import "./styles.scss";

import { normalizeImageUrl } from "../../../common/utils";
import Card from "../../../components/ui/Card";
import SectionHeader from "../../../components/ui/SectionHeader";

const ContentSection = ({ title = "", albums = [] }) => {
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
            image={normalizeImageUrl(album.image)}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
