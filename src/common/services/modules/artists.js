import api from "../api";

export default {
  async get(limit = 50) {
    try {
      const response = await api.get(`/me/following?type=artist&limit=${limit}`);
      console.log("artists", response.data.artists.items);

      return response.data.artists.items;
    } catch (error) {
      console.log({ ...error });
    }
  },

  async getTop(limit = 50) {
    const response = await api.get(`/me/top/artists?limit=${limit}`);
    console.log("top artists", response.data.items);

    return response.data.items;
  },
};
