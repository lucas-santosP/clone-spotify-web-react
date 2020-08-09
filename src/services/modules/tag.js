import api from "../api";

export default {
  async get() {
    try {
      const response = await api.get(
        `/?method=tag.getTopTags&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`
      );
      return response.data.toptags.tag;
    } catch (error) {
      console.log(error);
    }
  },

  async getTopInChart() {
    try {
      const response = await api.get(
        `/?method=chart.gettoptags&&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json&limit=10`
      );
      return response.data.tags.tag;
    } catch (error) {
      console.log(error);
    }
  },
};
