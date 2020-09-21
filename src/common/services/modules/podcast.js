import api from "../api";

export default {
  async get(limit = 20) {
    try {
      const responde = await api.get(
        `/?method=tag.gettopalbums&tag=podcast&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json&limit=${limit}`
      );

      return responde.data.albums.album;
    } catch (error) {
      console.log(error);
    }
  },
};
