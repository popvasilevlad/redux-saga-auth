import * as ACTIONS from 'constants/action-types';

const initialState = {
	loading: false,
	toke: '',
	loginError: ''
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case ACTIONS.LOGIN_ATTEMPT:
			return {
				...state,
				loading: true,
				loginError: '',
				page: '/'
			};

		case ACTIONS.LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				token: action.data.token,
				loginError: ''
			};

		case ACTIONS.LOGIN_FAIL:
			return {
				...state,
				loading: false,
				loginError: action.err
			};

		case ACTIONS.REDIRECT_TO_DASHBOARD:
			return {
				...state,
				page: '/dashboard'
			};


		default: 
			return state;
	}	
}

export default rootReducer;