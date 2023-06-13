import * as types from '../constants';

const initialState = {
	searchResults: []
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_SEARCH_RESULTS:
			return {
				...state,
				searchResults: action.data
			};

		case types.RESET_SEARCH_RESULTS:
			return {
				...state,
				searchResults: []
			};

		default:
			return state;
	}
};

export default searchReducer;
