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
};
