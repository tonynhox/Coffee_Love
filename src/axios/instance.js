import axios from 'axios';
import Storage from '../utils/Storage';

const instance = axios.create({
  baseURL: 'https://coffee.thaihoa.software/',
});

instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await Storage.getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
    //   console.error("AXIOS:", error);
      return Promise.reject(error);
    }
  },
//   (error) => {
//     console.error('loi axios', error);
//     return Promise.reject(error);
//   },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log("AXIOS Response Interceptor Error - 401 Unauthorized:", error);
      Alert.alert('Đã hết phiên đăng nhập!', 'Vui lòng đăng nhập lại', [
        {
          text: 'ok',
          onPress: () => {
            // Dispatch the logOut action using the store's dispatch function
            // store.dispatch(logOut());
            Storage.removeToken();
          },
        },
      ]);
    } else {
      console.log('ERROR CODE: ', error.status);
      console.error("AXIOS Response Interceptor Error:", error.response);
    }
    return Promise.reject(error);
  },
);

export default instance;
