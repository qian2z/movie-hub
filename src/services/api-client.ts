import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a4ce3cbe6fa0a42b246040bfbcef6b4a",
  },
});
