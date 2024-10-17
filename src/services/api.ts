import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.17.15.62:8081/sherwin',
 // timeout: 10000, 
});

export default api;