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
      <HomeSection title={"Recently played"} albums={getRandomAlbums()} />
      <HomeSection title={"Your heavy rotation"} albums={getRandomAlbums()} />
      <HomeSection title={"Mood"} albums={getRandomAlbums()} />
      <HomeSection title={"You might also like"} albums={getRandomAlbums()} />
      <HomeSection title={"Jump back in"} albums={getRandomAlbums()} />
      <HomeSection title={"For today's drive"} albums={getRandomAlbums()} />
    </div>
  );
};

export default Home;
