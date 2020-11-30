import api from "../api";

export default {
  async get(limit = 50) {
    try {
      const responde = await api.get(`/me/following?type=artist&limit=${limit}`);
      console.log("artists", responde.data.artists.items);

      return responde.data.artists.items;
    } catch (error) {
      console.log({ ...error });
    }
  },
};
