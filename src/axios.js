import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7175'
});

export default instance;