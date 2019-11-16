import {
	STOP_REQUEST,
	SEND_REQUEST,
	RECEIVE_USER,
	RECEIVE_WALLTET,
	RECEIVE_REWARD,
	CLEAR_AUTH
} from '../actions/auth/types';
const initState = {
	user: null,
	wallet: {
		balance: 4000000,
		id: 'x'
	},
	reward: {
		point: 1000,
		id: 2
	},
	isLoggedIn: true,
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
		case RECEIVE_WALLTET:
			return {
				...state,
				wallet: { ...action.wallet }
			};
		case RECEIVE_REWARD:
			return {
				...state,
				reward: action.reward
			};
		case CLEAR_AUTH:
			return {
				...initState
			};
		default:
			return state;
	}
};
