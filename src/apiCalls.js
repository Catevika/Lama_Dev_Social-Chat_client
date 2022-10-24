import axios from 'axios';

export const loginCall = async (userCredentials, dispatch) => {
	dispatch({ type: 'LOGIN_START' });
	try {
		const { data } = await axios.post('/auth/login', userCredentials);
		dispatch({ type: 'LOGIN_SUCCESS', payload: data });
	} catch (error) {
		dispatch({ type: 'LOGIN_FAIL', payload: error });
	}
};
