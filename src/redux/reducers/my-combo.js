import {
	SEND_REQUEST,
	STOP_REQUEST,
	RECEIVE_BOUGHT_COMBO,
	RECEIVE_MY_COMBOS,
	STOP_AUTO_RENEW,
	AUTO_RENEW,
	CATCH_ERROR_MY_COMBO,
	CLEAR_MY_COMBOS
} from '../actions/my-combos/types';

const initState = {
	items: [],
	isFetching: false,
	isFetched: false,
	hasError: false,
};

export const myComboReducer = (state = initState, action) => {
	switch (action.type) {
		case SEND_REQUEST:
			return {
				...state,
				isFetching: true,
				hasError: false
			};
		case STOP_REQUEST:
			return {
				...state,
				isFetching: false
			};
		case CATCH_ERROR_MY_COMBO:
			return {
				...state,
				hasError: true
			}
		case RECEIVE_BOUGHT_COMBO:
			return {
				...state,
				items: [ action.boughtCombo, ...state.items ],
				
			};
		case RECEIVE_MY_COMBOS:
			return {
				...state,
				items: [ ...action.myCombos ],
				isFetched: true
			};
		case AUTO_RENEW: {
			let newItems = state.items.slice();
			const stopIndex = newItems.findIndex((item) => item._id === action.comboId);
			newItems.splice(stopIndex, 1, {...newItems[stopIndex], autoRenew: true});
			return {
				...state,
				items: newItems
			}
		}
		case STOP_AUTO_RENEW:{
			let newItems = state.items.slice();
			const stopIndex = newItems.findIndex((item) => item._id === action.comboId);
			newItems.splice(stopIndex, 1, {...newItems[stopIndex], autoRenew: false});
			return {
				...state,
				items: newItems
			}
		}
		case CLEAR_MY_COMBOS:
			return {...initState}
		default:
			return state;
	}
};
