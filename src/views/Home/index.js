import React from "react";

import ContentSection from "./ContentSection";
import { useStore } from "../../store";

const Home = () => {
  const { albums } = useStore();

  function getRandomAlbums() {
    const finalIndex = Math.floor(Math.random() * (50 - 5)) + 7;
    const initialIndex = Math.floor(Math.random() * (finalIndex - 5));

    return albums.slice(initialIndex, finalIndex);
  }

  return (
    <div>
      <ContentSection title={"Atalhos"} albums={getRandomAlbums()} />
      <ContentSection
        title={"Tocado recentemente"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Seus podcasts mais escutados"}
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
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
      <ContentSection
        title={"Suas músicas estão com saudade"}
        albums={getRandomAlbums()}
      />
    </div>
  );
};

export default Home;
