import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://http://localhost:7001'
});

export default instance;