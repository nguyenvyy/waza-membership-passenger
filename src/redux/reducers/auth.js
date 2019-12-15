import {
	STOP_REQUEST,
	SEND_REQUEST,
	RECEIVE_USER,
	CLEAR_AUTH,
} from '../actions/auth/types';

const initState = {
	user: null,
	isLoggedIn: false,
	isLoading: false
};
export const authReducer = (state = initState, action) => {
	switch (action.type) {
		case STOP_REQUEST:
			return {
				...state,
				isLoading: false
			};
		case SEND_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case RECEIVE_USER:
			return {
				...state,
				user: { ...action.user },
				isLoggedIn: true
			};
		case CLEAR_AUTH:
			return {
				...initState
			};
		default:
			return state;
	}
};
