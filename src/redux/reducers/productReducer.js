import { ActionTypes } from '../contants/action-types';

const initialState = {
	products: []
};
export const producReducer = (state, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;
		default:
			return state;
	}
};
