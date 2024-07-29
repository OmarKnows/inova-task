import axios from 'axios';

const api = axios.create({
	baseURL: 'http://3.65.32.166', //typically this would be in an env file
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;
