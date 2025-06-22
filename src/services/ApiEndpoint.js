

import axios from 'axios';

// Axios instance setup
const instance = axios.create({
baseURL: 'https://assign-tqb8.onrender.com', 
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials:true
});

// Wrapper methods
export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const del = async (url) => {
  const token = localStorage.getItem("token");
  return await instance.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log("Interceptor Response", response);
    return response;
  },
  function (error) {
    console.log("Interceptor Error", error);
    return Promise.reject(error);
  }
);
