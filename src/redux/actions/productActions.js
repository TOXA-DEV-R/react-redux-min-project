import { ActionTypes } from '../contants/action-types';

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products
	};
};

export const selectedProducts = (products) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: products
	};
};

export const addProduct = (products) => {
	return {
		type: ActionTypes.ADD_PRODUCT,
		payload: products
	};
};

export const cardCounter = (products) => {
	return {
		type: ActionTypes.CARD_COUNTER,
		payload: products
	};
};
