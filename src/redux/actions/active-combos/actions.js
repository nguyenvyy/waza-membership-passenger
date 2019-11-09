import { REQUEST_ACTIVE_COMBOS, STOP_REQUEST_ACTIVE_COMBOS, RECEIVE_ACTIVE_COMBOS, RECEIVE_DETAIL_COMBO } from "./types";
import { getActiveCombosAPI, getDetailComboAPI } from "./services";

export const requestActiveCombos = () => ({type: REQUEST_ACTIVE_COMBOS})
export const stopRequestActiveCombos = () => ({type: STOP_REQUEST_ACTIVE_COMBOS})
export const receiveActiveCombos = (combos) =>({type: RECEIVE_ACTIVE_COMBOS, combos})
export const receiveDetailCombo = (combo) => ({type: RECEIVE_DETAIL_COMBO})

export const fetchActiveCombos = params => async (dispatch, getState) => {
    dispatch(requestActiveCombos())
    try {
        const user = getState().auth.user;
        const token = user && user.token
        const res = await getActiveCombosAPI(params, token);
        dispatch(stopRequestActiveCombos())
        dispatch(receiveActiveCombos(res.data))
        return res
    } catch (error) {
        dispatch(stopRequestActiveCombos())
        return error.response()        
    }
}

export const fetchDetailCombos = id => async (dispatch, getState) => {
    dispatch(requestActiveCombos())
    try {
        const user = getState().auth.user;
        const token = user && user.token
        const res = await getDetailComboAPI(id, token);
        dispatch(stopRequestActiveCombos())
        dispatch(receiveDetailCombo(res.data))
        return res
    } catch (error) {
        dispatch(stopRequestActiveCombos())
        return error.response()        
    }
}