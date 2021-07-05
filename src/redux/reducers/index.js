import { combineReducers } from 'redux';
import { producReducer } from './productReducer';

const reducer = combineReducers({
	allProducts: producReducer
});

export default reducer;
