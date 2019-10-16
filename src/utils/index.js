export const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const validateBeforeAuth = (email, pass) => {
	if (!email || !email.trim().length) {
		return {
			message: 'Please enter your email address',
			input: 'email'
		}
	}

	if (!pass || !pass.trim().length) {
		return {
			message: 'Please enter your password',
			input: 'pass'
		}
	}

	if (!emailRegEx.test(email)) {
		return {
			message: 'The email address is invalid',
			input: 'email'
		}
	}

	return {};
}