import axios from 'axios';

// Basic API config.
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

// Setting params on instance creation is not working on axios 0.19, as a work-around we use an interceptor to append default params.
api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: 'd5ab1c88c6fa0649cd46d8723ada06a0',
  };
  return config;
});

// Base URL for tmdb images.
api.imgURL = "https://image.tmdb.org/t/p/w500";

export default api;