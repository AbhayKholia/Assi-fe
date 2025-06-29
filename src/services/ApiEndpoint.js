// import React from 'react'
// import axios from 'axios'
// import { data } from 'react-router-dom'


// const instance = axios.create({
//     baseURL:'http://localhost:4000',
//     header:{
//         'Content-Type': 'application/json'
//     }
// })
// export const  get=(url,params) = instance.get(url,{params})
// export const  post=(url,data) = instance.post(url,data)
// export const  put=(url,data) = instance.put(url,data)
// export const  delet=(url) = instance.delete(url)


// instance.interceptors.request.use(function (config) {
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });


// instance.interceptors.response.use(function (response) {
//     console.log("Interceptor Reponse" , response)
//     return response;
//   }, function (error) {
//         console.log("Interceptor Reponse" , error)

//     return Promise.reject(error);
//   });

import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:4000',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials:true
})

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const deleteUser = (url) => instance.delete(url);


  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
        console.log('intercpert reponse',response)
    return response;
  }, function (error) {
    console.log('intercpert reponse',error)
    return Promise.reject(error);
  });