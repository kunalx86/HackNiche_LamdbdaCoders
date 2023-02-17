import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:5000/",
  validateStatus: (status) => status < 300,
});

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('auth-key')
  config.headers.auth = `Bearer ${token}`

  return config
})