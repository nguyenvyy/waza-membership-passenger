import {
	STOP_REQUEST,
	SEND_REQUEST,
	RECEIVE_USER,
	RECEIVE_WALLTET,
	RECEIVE_REWARD,
	CLEAR_AUTH,
	INCREASE_BALANCE,
	DECREASE_BALANCE
} from '../actions/auth/types';
// const initState = {
// 	user: {
// 		email: 'nguyenvy@gmail.com',
// 		fullName: 'nguyen vy',
// 		phone: '12312312',
// 		image: '',
// 	},
// 	wallet: {
// 		balance: 0,
// 		id: 'x'
// 	},
// 	reward: {
// 		point: 1000,
// 		id: 2
// 	},
// 	isLoggedIn: true,
// 	isLoading: false
// };
const initState = {
	user: null,
	wallet: {
		balance: 0,
		id: 'x'
	},
	reward: {
		point: 1000,
		id: 2
	},
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
		// mockup
		case INCREASE_BALANCE:
			return {
				...state,
				wallet: {
					...state.wallet,
					balance: state.wallet.balance + action.money
				}
			}
		case DECREASE_BALANCE:
			return {
				...state,
				wallet: {
					...state.wallet,
					balance: state.wallet.balance - action.money
				}
			}
		default:
			return state;
	}
};
