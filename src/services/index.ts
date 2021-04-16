import axios from "axios";

const api = axios.create({
  baseURL: "https://devrental-api.herokuapp.com/",
});
export default api;
