import axios from "axios";

const api = axios.create({
  baseURL: "http://ws.audioscrobbler.com/2.0",
});

export default api;

// // Application name	Clone Spotify
// // Shared secret	bce415c8b9c3b02e5a51b8914aaecfbd
// // Registered to	Lukas_Maxson
