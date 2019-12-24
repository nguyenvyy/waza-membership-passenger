import {
	SEND_REQUEST,
	STOP_REQUEST,
	RECEIVE_BOUGHT_COMBO,
	RECEIVE_MY_COMBOS,
	CATCH_ERROR_MY_COMBO,
	CLEAR_MY_COMBOS,
	STOP_AUTO_RENEW,
	AUTO_RENEW
} from './types';
import { buyComboAPI, getMyComboAPI, stopAutoRenewComboAPI, autoRenewComboAPI } from './services';

const stopAutoRenew = comboId => ({type: STOP_AUTO_RENEW, comboId})
const autoRenew = comboId => ({type: AUTO_RENEW, comboId})
export const sendRequest = () => ({ type: SEND_REQUEST });
export const stopRequest = () => ({ type: STOP_REQUEST });
export const receiveBoughtCombo = (boughtCombo) => ({ type: RECEIVE_BOUGHT_COMBO, boughtCombo });
export const receiveMyCombos = (myCombos) => ({ type: RECEIVE_MY_COMBOS, myCombos });
export const catchErrorMyCombo = () => ({ type: CATCH_ERROR_MY_COMBO });
export const clearMyCombo = () => ({type: CLEAR_MY_COMBOS})

export const requestStopAutoRenew = comboId => async (dispatch, getState) => {
	const userId = getState().auth.user && getState().auth.user._id
	if(!userId) return 400
	const statusRes = await stopAutoRenewComboAPI(comboId,userId)
	if(statusRes === 200) {
		dispatch(stopAutoRenew(comboId))
	}
	return statusRes
}

export const requestAutoRenew = comboId => async (dispatch, getState) => {
	const userId = getState().auth.user && getState().auth.user._id
	if(!userId) return 400
	const statusRes = await autoRenewComboAPI(comboId,userId)
	if(statusRes === 200) {
		dispatch(autoRenew(comboId))
	}
	return statusRes
}


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
			if (response.data.Error === 'You have already registered this combo for user') return 405; // combo registered
			return 400; //combo notfound
		}
		return 500; // network err
	}
};

export const requestMyCombo = (userId) => async (dispatch) => {
	dispatch(sendRequest());
	try {
		let {combos, comboConfigs} = await getMyComboAPI(userId);
		combos.forEach((combo) => {
			const config = comboConfigs.find(item => item.combo_id === combo.combo_id)
			if(config !== undefined) {
				combo.autoRenew = config.autoRenew
			} else {
				combo.autoRenew = null
			}
		})
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
