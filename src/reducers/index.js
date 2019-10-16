import * as ACTIONS from 'constants/action-types';

const initialState = {
	loading: true,
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case ACTIONS.LOGIN_ATTEMPT:
			return {
				...state,
				loading: true
			};

		case ACTIONS.LOGIN_SUCCESS:
			return {
				...state,
				loading: true,
				data: action.payload
			};

		case ACTIONS.LOGIN_FAILED:
			return {
				...state,
				loading: true
			};
		default: 
			return state;
	}	
}

export default rootReducer;