import React, { createContext, useEffect, useState, useContext } from "react";
import api from "../common/services/api";
import {
  albumsServices,
  artistServices,
  categoriesServices,
} from "../common/services/modules";

const StoreContext = createContext();

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
const libraryTabs = ["Playlists", "Podcasts", "Artists", "Albums"];

export default function StoreProvider({ children }) {
  const [token, setToken] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [categories, setCategories] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [currentLibraryTab, setCurrentLibraryTab] = useState(libraryTabs[0]);

  async function fetchAll() {
    const getAlbum = albumsServices.get();
    const getArtists = artistServices.get();
    const getTopArtists = artistServices.getTop();
    const getCategories = categoriesServices.get();
    const data = await Promise.all([getAlbum, getArtists, getTopArtists, getCategories]);

    const [fetchedAlbums, fetchedArtists, fetchedTopArtists, fetchedCategories] = data;
    setAlbums([...fetchedAlbums]);
    setArtists([...fetchedArtists]);
    setTopArtists([...fetchedTopArtists]);
    setTopCategories([...fetchedCategories.slice(0, 4)]);
    setCategories([...fetchedCategories.slice(4)]);

    setIsFetching(false);
  }

  // ou useLayoutEffect
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    } else if (hash.access_token) {
      setToken(() => hash.access_token);
      localStorage.setItem("token", token);
    }

    if (token) {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      fetchAll();
    }
  }, [token]);

  return (
    <StoreContext.Provider
      value={{
        token,
        isFetching,
        albums,
        podcasts: [],
        artists,
        topArtists,
        categories,
        topCategories,
        libraryTabs,
        currentLibraryTab,
        setCurrentLibraryTab,
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
