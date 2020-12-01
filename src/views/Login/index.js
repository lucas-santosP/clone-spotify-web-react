import React from "react";
import "./styles.scss";

const Login = () => {
  const redirectUri = "http://localhost:3000/clone-spotify-web-react";
  const scopes = "user-library-read user-follow-read user-top-read";

  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="login-card">
        <p>
          Spotify account permission is required,
          <br /> after accept you will be redirected back.
        </p>
        <a
          className="btn-link"
          href={`https://accounts.spotify.com/authorize?client_id=${
            process.env.REACT_APP_SPOTIFY_API_KEY
          }&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
            scopes
          )}&response_type=token`}
        >
          Go to Spotify login
        </a>
      </div>
    </div>
  );
};

export default Login;