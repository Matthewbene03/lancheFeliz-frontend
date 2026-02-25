import axios from "axios"
import store from "../store";

const axiosService = axios.create({
    baseURL: "http://localhost:3001"
})

axiosService.interceptors.request.use(config => {
  const token = store.getState().authorization.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosService;