import * as ACTIONS from 'constants/action-types';

const initialState = {
	searchLoading: false,
	scrollLoading: false
};

function rootReducer(state = initialState, action) {
	switch(action.type) {
		case ACTIONS.SEARCH_START:
			return {
				...state,
				searchLoading: true
			};
		default: 
			return state;
	}	
}

export default rootReducer;