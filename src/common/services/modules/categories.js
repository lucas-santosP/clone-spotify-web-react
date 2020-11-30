import api from "../api";

export default {
  async get(limit = 50) {
    try {
      const response = await api.get(`/browse/categories?limit${limit}`);
      console.log("categories", response.data.categories.items);

      return response.data.categories.items;
    } catch (error) {
      console.log(error);
    }
  },
};
