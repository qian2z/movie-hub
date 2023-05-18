import axios from "axios";

interface ImportMetaEnv {
  TMDB_API_KEY: string;
}

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: import.meta.env.TMDB_API_KEY,
  },
});
