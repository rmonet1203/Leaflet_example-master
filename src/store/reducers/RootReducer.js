import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const RootReducer = combineReducers({
	search: searchReducer
});

export default RootReducer;
