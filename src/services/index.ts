import axios from "axios";

const api = axios.create({
  baseURL: "https://devrental-api.herokuapp.com/",
  // baseURL: "http://localhost:3001/",
});
export default api;
