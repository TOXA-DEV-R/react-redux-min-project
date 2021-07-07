import { ActionTypes } from '../contants/action-types';

const initialState = {
	products: []
};
const cardCounter = {
	products: []
};

export const producReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: payload };
		default:
			return state;
	}
};

export const selectedProductsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SELECTED_PRODUCT:
			return { ...state, ...payload };
		default:
			return state;
	}
};

export const selectedAddProduct = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.ADD_PRODUCT:
			return { ...state, ...payload };
		default:
			return state;
	}
};

export const productCardCounter = (state = cardCounter, { type, payload }) => {
	switch (type) {
		case ActionTypes.CARD_COUNTER:
			return { ...state, products: [ ...state.products, payload ] };
		default:
			return state;
	}
};
