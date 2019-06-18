import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://offblack.github.io/to-do-list/tasks'
});

export default instance;