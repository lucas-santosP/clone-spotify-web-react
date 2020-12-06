import React, { createContext, useEffect, useState, useContext } from "react";
import api from "../common/services/api";
import {
  albumsServices,
  artistServices,
  categoriesServices,
  userServices,
  playlistsServices,
  podcastsServices,
} from "../common/services/modules";
import { cookies } from "../common/utils";

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
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [currentLibraryTab, setCurrentLibraryTab] = useState(libraryTabs[0]);

  async function fetchAll() {
    setIsFetching(true);
    const getAlbum = albumsServices.get();
    const getArtists = artistServices.get();
    const getTopArtists = artistServices.getTop();
    const getCategories = categoriesServices.get();
    const getUser = userServices.get();
    const getPlaylists = playlistsServices.get();
    const getPodcasts = podcastsServices.get();

    const data = await Promise.all([
      getAlbum,
      getArtists,
      getTopArtists,
      getCategories,
      getUser,
      getPlaylists,
      getPodcasts,
    ]);

    const [
      fetchedAlbums,
      fetchedArtists,
      fetchedTopArtists,
      fetchedCategories,
      fetchedUser,
      fetchedPlaylists,
      fetchedPodcasts,
    ] = data;
    setAlbums([...fetchedAlbums]);
    setArtists([...fetchedArtists]);
    setTopArtists([...fetchedTopArtists]);
    setTopCategories([...fetchedCategories.slice(0, 4)]);
    setCategories([...fetchedCategories.slice(4)]);
    setUser({ ...fetchedUser });
    setPlaylists([...fetchedPlaylists]);
    setPodcasts([...fetchedPodcasts]);

    setIsFetching(false);
  }

  function clearStore() {
    setIsFetching(false);
    setToken("");
    setUser(null);
    setAlbums([]);
    setArtists([]);
    setTopArtists([]);
    setCategories([]);
    setPlaylists([]);
    setTopCategories([]);
  }

  // ou useLayoutEffect
  useEffect(() => {
    const cookieToken = cookies.get("token");
    if (cookieToken) {
      setToken(cookieToken);
    } else if (hash.access_token) {
      setToken(() => hash.access_token);
      cookies.set("token", hash.access_token);
      hash.access_token = "";
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
        clearStore,
        isFetching,
        user,
        albums,
        podcasts,
        artists,
        topArtists,
        playlists,
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
