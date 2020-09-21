import React from "react";

import HomeSection from "./HomeSection";
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
      <HomeSection title={"Atalhos"} albums={getRandomAlbums()} />
      <HomeSection title={"Tocado recentemente"} albums={getRandomAlbums()} />
      <HomeSection
        title={"Suas músicas e álbuns favoritos"}
        albums={getRandomAlbums()}
      />
      <HomeSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <HomeSection
        title={"Com base no que você ouviu recentemente"}
        albums={getRandomAlbums()}
      />
      <HomeSection
        title={"Novos lançamentos para você"}
        albums={getRandomAlbums()}
      />
    </div>
  );
};

export default Home;
