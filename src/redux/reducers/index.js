import { combineReducers } from 'redux';
import { producReducer, selectedProductsReducer, selectedAddProduct, productCardCounter } from './productReducer';

const reducer = combineReducers({
	allProducts: producReducer,
	product: selectedProductsReducer,
	addProducts: selectedAddProduct,
	productCardCounter
});

export default reducer;
