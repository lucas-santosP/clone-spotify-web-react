import React from "react";

import ContentSection from "./ContentSection";
import { useStore } from "../../store";

const Home = () => {
  const { albums } = useStore();
  let initialIndex = 0;

  function getRandomAlbums() {
    const albumsResult = albums.slice(initialIndex, initialIndex + 10);

    if (initialIndex % 10 === 0) initialIndex += 5;
    else initialIndex += 10;

    return albumsResult;
  }

  return (
    <div>
      <ContentSection title={"Atalhos"} albums={getRandomAlbums()} />
      <ContentSection
        title={"Tocado recentemente"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas e álbuns favoritos"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Com base no que você ouviu recentemente"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Novos lançamentos para você"}
        albums={getRandomAlbums()}
      />
    </div>
  );
};

export default Home;
