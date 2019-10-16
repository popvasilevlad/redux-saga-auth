import * as ACTIONS from 'constants/action-types';

export const loginAttempt = (email, password) => ({
	type: ACTIONS.LOGIN_ATTEMPT,
	email: email,
	password: password
});
