import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

import { useStore } from "@/store";
import { cookies } from "@utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const scopes = `user-library-read user-follow-read user-top-read playlist-read-collaborative playlist-read-private`;
const redirectUri =
  process.env.NODE_ENV === "development"
    ? `http://localhost:3000/clone-spotify-web-react/login`
    : `https://lucas-santosp.github.io/clone-spotify-web-react/login`;

const Login = () => {
  const history = useHistory();
  const { setToken } = useStore();
  const hash = getUrlHashToObject();

  function getUrlHashToObject() {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce(function (initial, item) {
        if (item) {
          let parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
  }

  function goToSpotifyLogin() {
    window.location = `https://accounts.spotify.com/authorize?client_id=${
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_SPOTIFY_API_KEY
        : process.env.REACT_APP_SPOTIFY_API_KEY_PROD
    }&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes)}&response_type=token`;
  }

  useEffect(() => {
    if (hash.access_token) {
      cookies.set("token", hash.access_token);
      setToken(() => hash.access_token);
      history.push("/home");
    }
  }, []);

  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-modal">
        <h1 className="title">
          Spotify login is required to continue, after finishing you will be redirected back.
        </h1>
        <h2 className="subtitle">
          Note that, all data accessed by this system are read-only and non-private.
          <b> We will not have access to your email.</b> You will be able to check all the
          information accessed before accepting it.
        </h2>
        <button className="btn-link" onClick={goToSpotifyLogin}>
          Go to Spotify login
          <FontAwesomeIcon icon={faSignInAlt} />
        </button>
      </div>
    </div>
  );
};

export default Login;
