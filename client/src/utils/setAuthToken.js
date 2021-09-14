import axios from 'axios';

export const setAuthToken = token => {
	if(token){
		axios.defaults.headers.common['x-auth-token'] = token;
	}else {
		delete axios.defaults.header.common['x-auth-token']
	}
}