import * as ACTIONS from 'constants/action-types';
// import { getDataFromAPI } from './utils/api';

export const loginAttempt = () => ({
	type: ACTIONS.LOGIN_ATTEMPT
});

export const loginSucces = payload => ({
	type: ACTIONS.LOGIN_SUCCESS,
	payload
});

// const loginError = () => ({
// 	type: ACTIONS.LOGIN_FAIL
// });
