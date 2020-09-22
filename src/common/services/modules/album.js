import api from "../api";

export default {
  async get(limit = 51) {
    try {
      const responde = await api.get(
        `?method=user.gettopalbums&user=Lukas_Maxson&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json&limit=${limit}`
      );

      return responde.data.topalbums.album;
    } catch (error) {
      console.log(error);
    }
  },

  async getInfos(albumName, artistName) {
    const response = await api.get(
      `/?method=album.getinfo&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&album=${albumName}&artist=${artistName}&autocorrect=1&format=json`
    );

    return response.data.album;
  },
};
