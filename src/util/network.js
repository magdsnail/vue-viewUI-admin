import axios from 'axios'
import { Message } from 'view-design'

import store from '@/store'

axios.defaults.timeout = 15000;
axios.defaults.headers = { 'Content-Type': 'application/json;charset=urf-8' };

axios.interceptors.request.use(function (config) {
	if (config.headers) {
		config.headers['authorization'] = store.getters.token;
	}
	return config;
});

axios.interceptors.response.use(function (response) {
	if (response.status === 200) {
		if (response.data.code === 0) {
			return response;
		} else {
			return Promise.reject(`service response: ${response.data.message}`);
		}
	} else {
		return Promise.reject(`(${response.status})${response.statusText}`);
	}
}, function (error) {
	if (!error.response) {
		Message.error('服务器繁忙，请稍后再试!');
	} else if (error.response.status >= 500) {
		Message.error('服务器繁忙，请稍后再试！');
	} else if (error.response.status === 404) {
		Message.error('请求地址不存在！');
	} else if (error.response.status === 400) {
		Message.error('请求错误，请检查参数或请求头');
	}
	return Promise.reject(error);
});

function foxPost(url, data, headers) {
	return axios({
		method: 'POST',
		url: url,
		baseURL: process.env.VUE_APP_BASE_API,
		headers: headers ? { ...axios.defaults.headers, ...headers } : axios.defaults.headers,
		data: data
	});
}

function setToken(token) {
	axios.defaults.headers['authorization'] = token;
}

function clearToken() {
	delete axios.defaults.headers['authorization'];
}

export default {
	foxPost,
	setToken
};