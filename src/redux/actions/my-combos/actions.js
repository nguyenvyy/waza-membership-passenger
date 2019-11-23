import {
	SEND_REQUEST,
	STOP_REQUEST,
	RECEIVE_BOUGHT_COMBO,
	STOP_COMBO,
	RECEIVE_MY_COMBOS,
	FETCH_MY_COMBO
} from './types';
import { buyComboAPI, getMyComboAPI } from './services';

export const sendRequest = () => ({ type: SEND_REQUEST });
export const stopRequest = () => ({ type: STOP_REQUEST });
export const receiveBoughtCombo = (boughtCombo) => ({ type: RECEIVE_BOUGHT_COMBO, boughtCombo });
export const stopCombo = (stopedCombo) => ({ type: STOP_COMBO, stopedCombo });
export const receiveMyCombos = (myCombos) => ({ type: RECEIVE_MY_COMBOS, myCombos });
export const fetchMyCombo = () => ({ type: FETCH_MY_COMBO });
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
	try {
		dispatch(sendRequest());
		const res = await getMyComboAPI(userId);
		dispatch(receiveMyCombos(res.data));
		dispatch(fetchMyCombo());
		dispatch(stopRequest());
		return 200;
	} catch (error) {
		dispatch(stopRequest());
		dispatch(fetchMyCombo());
		return 400;
    }
};
