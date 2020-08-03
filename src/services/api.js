import axios from "axios";
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const api = axios.create({ baseURL: process.env.REACT_APP_URL });

export default api;
