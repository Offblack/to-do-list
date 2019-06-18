import axios from 'axios';

const instance = axios.create({
   baseURL: 'to-do-list/db.json'
});

export default instance;