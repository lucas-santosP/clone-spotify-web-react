import React, { createContext, useEffect, useState, useContext } from "react";
import {
  albumsServices,
  tagsServices,
  podcastsServices,
} from "../common/services/modules";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const [albums, setAlbums] = useState([]);
  const [tags, setTags] = useState([]);
  const [topTags, setTopTags] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [categories, setCategories] = useState({
    current: "Playlists",
    array: ["Playlists", "Podcasts", "Artist", "Albums"],
  });

  useEffect(() => {
    async function fetchAll() {
      const fetchedAlbums = await await albumsServices.get();
      setAlbums([...fetchedAlbums]);

      const fetchedTags = await tagsServices.get();
      setTopTags([...fetchedTags.slice(0, 4)]);
      setTags([...fetchedTags.slice(4)]);

      const fetchedPodcasts = await podcastsServices.get();
      setPodcasts([...fetchedPodcasts]);

      setIsFetching(false);
    }

    fetchAll();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        albums,
        tags,
        topTags,
        isFetching,
        podcasts,
        categories,
        setCategories,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  return { ...context };
}
