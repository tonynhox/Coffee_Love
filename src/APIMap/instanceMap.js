import axios from 'axios';
import Storage from '../utils/Storage';

const instanceMap = axios.create({
  baseURL: 'http://api.map4d.vn/',
});

instanceMap.interceptors.request.use(
  async (config) => {
    try {

      return config;
    } catch (error) {
    //   console.error("AXIOS:", error);
      return Promise.reject(error);
    }
  },

);



export default instanceMap;
