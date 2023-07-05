import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "58fbed667ced4f6b9f85e2ace865dc36",
  },
});
