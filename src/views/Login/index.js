import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

import { useStore } from "@/store";
import { cookies } from "@utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "@/components/ui";

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
        <Logo className="logo" />
        <h1 className="title">Hello! This is an UI clone of Spotify web player</h1>
        <section className="paragraphs">
          <p>
            Spotify login is required to be able to display user data from their API. After
            finishing you will be redirected back.
          </p>
          <p>
            Note: All data accessed by this app are read-only and non-private.
            <b> We will not have access to your email.</b> You will be able to check all the
            information accessed before accepting it.
          </p>
        </section>

        <button className="btn-link" onClick={goToSpotifyLogin}>
          Go to Spotify login
          <FontAwesomeIcon icon={faSignInAlt} />
        </button>
      </div>
    </div>
  );
};

export default Login;
