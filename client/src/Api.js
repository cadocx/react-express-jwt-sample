import axios from 'axios';
import jwtDecode from 'jwt-decode';

const api = axios.create();

api.getToken = function() {
	return localStorage.getItem('token');
}

api.setToken = function(token) {
	localStorage.setItem('token', token);
	return token;
}

api.getCurrentUser = function() {
	const token = this.getToken();
	if(token) return jwtDecode(token);
	return null;
}

api.logIn = function(credentials) {
	return this({ method: 'post', url: '/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token;
			if(token) {
				this.defaults.headers.common.token = this.setToken(token);
				return jwtDecode(token);
			} else {
				return false;
			}
		})
}

api.signUp = function(userInfo) {
	return this({ method: 'post', url: '/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token;
			if(token) {
				this.defaults.headers.common.token = this.setToken(token);
				return jwtDecode(token);
			} else {
				return false;
			}
		})
}

api.logOut = function() {
	localStorage.removeItem('token');
	delete this.defaults.headers.common.token;
	return true;
}

api.defaults.headers.common.token = api.getToken();
export default api;