import axios from 'axios';
import Storage from '../utils/Storage';
import { Alert } from 'react-native';
import RNRestart from 'react-native-restart';

const instance = axios.create({
  baseURL: 'https://coffee.thaihoa.software/',
});

//time request
instance.defaults.timeout = 10000;

instance.interceptors.request.use(
  async config => {
    try {
      const token = await Storage.getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
        console.error("AXIOS:", error);
      return Promise.reject(error);
    }
  },
  //   (error) => {
  //     console.error('loi axios', error);
  //     return Promise.reject(error);
  //   },
);
let isRefreshing = false;
instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response && error.response.status === 401 && !isRefreshing) {
      isRefreshing = true;
      Alert.alert('Đã hết phiên đăng nhập!', 'Vui lòng đăng nhập lại', [
        {
          text: 'ok',
          onPress: () => {
            // Dispatch the logOut action using the store's dispatch function
            // store.dispatch(logOut());
            Storage.removeToken();
            Storage.removeItem('id_user');
            // RNRestart.Restart();
            RNRestart.restart();

          },
        },
      ]);
    } else {
      console.log('ERROR CODE: ', error);
      console.error('AXIOS Response Interceptor Error:', error.response);
    }
    return Promise.reject(error);
  },
);

export default instance;
