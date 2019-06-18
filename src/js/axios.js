import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://offblack.github.io/to-do-list/db.json'
});

export default instance;