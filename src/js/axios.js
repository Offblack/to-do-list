import axios from 'axios';

const instance = axios.create({
   baseURL: 'to-do-list/tasks'
});

export default instance;