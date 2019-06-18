import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://my-json-server.typicode.com/Offblack/to-do-list'
});

export default instance;