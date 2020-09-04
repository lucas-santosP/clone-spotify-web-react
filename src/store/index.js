import React, { createContext, useEffect, useState, useContext } from "react";
import { albumServices, tagServices } from "../common/services/modules";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const [albums, setAlbums] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagsInChart, setTagsInChart] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      const fetchedAlbums = await await albumServices.get();
      setAlbums([...fetchedAlbums]);

      const fetchedTags = await tagServices.get();
      setTags([...fetchedTags]);

      const fetchedTagsChart = await tagServices.getTopInChart();
      setTagsInChart([...fetchedTagsChart]);

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
