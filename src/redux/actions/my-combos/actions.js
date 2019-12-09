import {
	SEND_REQUEST,
	STOP_REQUEST,
	RECEIVE_BOUGHT_COMBO,
	STOP_COMBO,
	RECEIVE_MY_COMBOS,
	CATCH_ERROR_MY_COMBO,
	CLEAR_MY_COMBOS
} from './types';
import { buyComboAPI, getMyComboAPI } from './services';

export const sendRequest = () => ({ type: SEND_REQUEST });
export const stopRequest = () => ({ type: STOP_REQUEST });
export const receiveBoughtCombo = (boughtCombo) => ({ type: RECEIVE_BOUGHT_COMBO, boughtCombo });
export const stopCombo = (stopedCombo) => ({ type: STOP_COMBO, stopedCombo });
export const receiveMyCombos = (myCombos) => ({ type: RECEIVE_MY_COMBOS, myCombos });
export const catchErrorMyCombo = () => ({ type: CATCH_ERROR_MY_COMBO });
export const clearMyCombo = () => ({type: CLEAR_MY_COMBOS})
export const requestBuyCombo = (userId, comboId) => async (dispatch) => {
	try {
		dispatch(sendRequest());
		const res = await buyComboAPI(userId, comboId);
		dispatch(receiveBoughtCombo(res.data));
		dispatch(stopRequest());
		return 200;
	} catch (error) {
		dispatch(stopRequest());
		const { response } = error;
		if (response !== undefined && response.status === 400) {
			if (response.data.Error === 'You have already register this combo for user') return 405; // combo registered
			return 400; //combo notfound
		}
		return 500; // network err
	}
};

export const requestMyCombo = (userId) => async (dispatch) => {
	dispatch(sendRequest());
	try {
		const combos = await getMyComboAPI(userId);
		dispatch(receiveMyCombos(combos));
	} catch (error) {
		dispatch(stopRequest());
		if( error && error.response && error.response.status === 404) {
			// user has yet resgister
			dispatch(receiveMyCombos([]));
			return error.response.status
		}
		dispatch(catchErrorMyCombo());
		return 400;
	}
	dispatch(stopRequest());
	return 200;
};
