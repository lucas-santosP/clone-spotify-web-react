import React from "react";
import "./styles.scss";

import { useStore } from "../../store";
import { artistsArrayToString } from "../../common/utils";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";

const YourLibrary = () => {
  const { currentLibraryTab, albums, podcasts, artists } = useStore();

  return (
    <div className="your-library-container">
      <SectionHeader title={currentLibraryTab} />

      <div className="grid-cards">
        {currentLibraryTab === "Artists" &&
          artists.map((artist) => (
            <Card
              className="grid-item"
              key={artist.id}
              title={artist.name}
              subtitle="Artist"
              image={artist.images[1].url}
              imageRounded={true}
            />
          ))}

        {currentLibraryTab === "Podcasts" &&
          podcasts.map((podcast) => (
            <Card
              className="grid-item"
              key={podcast.mbid + podcast.name}
              title={podcast.name}
              subtitle={podcast.name}
              image={podcast.images}
            />
          ))}

        {currentLibraryTab === "Albums" &&
          albums.map((album) => (
            <Card
              className="grid-item"
              key={album.id}
              title={album.name}
              subtitle={artistsArrayToString(album.artists)}
              image={album.images[1].url}
            />
          ))}
      </div>
    </div>
  );
};

export default YourLibrary;
