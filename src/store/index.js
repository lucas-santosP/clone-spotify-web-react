import React, { createContext, useEffect, useState, useContext } from "react";
import {
  albumServices,
  tagServices,
  podcastServices,
} from "../common/services/modules";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const [albums, setAlbums] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagsInChart, setTagsInChart] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const [categories, setCategories] = useState({
    current: "Playlists",
    array: ["Playlists", "Podcasts", "Artistas", "Álbuns"],
  });

  useEffect(() => {
    async function fetchAll() {
      const fetchedAlbums = await await albumServices.get();
      setAlbums([...fetchedAlbums]);

      const fetchedTags = await tagServices.get();
      setTags([...fetchedTags]);

      const fetchedTagsChart = await tagServices.getTopInChart();
      setTagsInChart([...fetchedTagsChart]);

      const fetchedPodcasts = await podcastServices.get();
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
        tagsInChart,
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
