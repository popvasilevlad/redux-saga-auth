import axios from 'axios';

axios.interceptors.response.use(function (response) {
	return response;
	}, function (error) {
		return Promise.reject(error.response.data);
	});

export const loginPostRequest = params => {
	return axios.post('https://reqres.in/api/login', params);
};