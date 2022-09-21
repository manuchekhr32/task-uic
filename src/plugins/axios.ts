import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://club.metsenat.uz/api/v1',
  withCredentials: true,
})

export default instance;