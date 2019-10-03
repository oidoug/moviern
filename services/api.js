import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd5ab1c88c6fa0649cd46d8723ada06a0',
  }
})

export default api;