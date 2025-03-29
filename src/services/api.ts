import axios from "axios";

export const API = axios.create({
  baseURL: "https://reqres.in/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const loginUser = (credentials: any) => API.post("/login", credentials);
