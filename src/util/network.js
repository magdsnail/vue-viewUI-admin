import axios from 'axios'
import { Message } from 'view-design'

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json;charset=urf-8'
    }
});
instance.defaults.headers.common['Authorization'] = '123';

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    if (!error.response) {
        Message.error('请求超时，请稍后重试！');
    } else if (error.response.status >= 500) {
        Message.error('服务器繁忙，请稍后再试！');
    } else if (error.response.status === 404) {
        Message.error('请求地址不存在！');
    } else if (error.response.status === 400) {
        Message.error('请求错误，请检查参数或请求头');
    }
    return Promise.reject(error);
  });

  export default instance;