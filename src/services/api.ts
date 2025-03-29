import axios from "axios";

export const API = axios.create({
  baseURL: "https://reqres.in/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const fetchUsers = (page: any) => API.get(`/users?page=${page}`);
export const getUser = (id: any) => API.get(`/users/${id}`);
export const loginUser = (credentials: any) => API.post("/login", credentials);
export const updateUser = (id: any, data: any) => API.put(`/users/${id}`, data);
export const deleteUser = (id: any) => API.delete(`/users/${id}`);