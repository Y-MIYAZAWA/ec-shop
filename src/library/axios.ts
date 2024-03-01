import Axios, { InternalAxiosRequestConfig } from "axios";
import storage from "../utilities/storage";
import { API_URL } from "../config";

function authRequestIntercepter(config: InternalAxiosRequestConfig){
  const token = storage.getToken();

  if(token){
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL
});

axios.interceptors.request.use(authRequestIntercepter);
axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

