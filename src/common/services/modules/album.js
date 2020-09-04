import api from "../api";

export default {
  async get(limit = 51) {
    try {
      const response = await api.get(
        `/?method=library.getartists&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&user=Lukas_Maxson&format=json&limit=${limit}`
      );
      const artists = response.data.artists.artist;

      const albums = [];
      for (let i = 0; i < artists.length; i++) {
        const responde = await api.get(
          `/?method=artist.gettopalbums&artist=${artists[i].name}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json&limit=1`
        );
        await albums.push(...responde.data.topalbums.album);
      }
      return albums;
    } catch (error) {
      console.log(error);
    }
  },
};
