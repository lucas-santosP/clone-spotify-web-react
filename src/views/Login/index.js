import React from "react";
import "./styles.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const redirectUri =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/clone-spotify-web-react"
      : "https://lucas-santosp.github.io/clone-spotify-web-react";
  const scopes =
    "user-library-read user-follow-read user-top-read playlist-read-collaborative";

  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-modal">
        <p className="text">
          Spotify login is required, after finishing you will be redirected back.
        </p>
        <a
          className="btn-link"
          href={`https://accounts.spotify.com/authorize?client_id=${
            process.env.NODE_ENV === "development"
              ? process.env.REACT_APP_SPOTIFY_API_KEY
              : process.env.REACT_APP_SPOTIFY_API_KEY_PROD
          }&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
            scopes
          )}&response_type=token`}
        >
          Go to Spotify login
          <FontAwesomeIcon icon={faSignInAlt} />
        </a>
      </div>
    </div>
  );
};

export default Login;
