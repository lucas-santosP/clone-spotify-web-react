import React from "react";
import "./styles.scss";

import { useStore } from "../../store";
import { normalizeImageUrl } from "../../common/utils";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";

const YourLibrary = () => {
  const { categories, albums, podcasts } = useStore();

  return (
    <div className="your-library-container">
      <SectionHeader title={categories.current} />

      <div className="grid-cards">
        {categories.current === "Albums"
          ? albums.map((album) => (
              <Card
                className="grid-item"
                key={album.mbid + album.name}
                title={album.name}
                subtitle={album.artist.name}
                image={normalizeImageUrl(album.image)}
              />
            ))
          : null}

        {categories.current === "Podcasts"
          ? podcasts.map((podcast) => (
              <Card
                className="grid-item"
                key={podcast.mbid + podcast.name}
                title={podcast.name}
                subtitle={podcast.name}
                image={normalizeImageUrl(podcast.image)}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default YourLibrary;
