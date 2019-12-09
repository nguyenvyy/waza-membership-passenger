import { REQUEST_ACTIVE_COMBOS, STOP_REQUEST_ACTIVE_COMBOS, RECEIVE_ACTIVE_COMBOS, RECEIVE_DETAIL_COMBO, RECEIVE_POLICIES, CATCH_ERROR_ACTIVE_COMBOS } from "./types";
import { getActiveCombosAPI, getDetailComboAPI, getPolicyAPI } from "./services";
import { deduplicate } from "../../../utils";

export const startRequestActiveCombos = () => ({type: REQUEST_ACTIVE_COMBOS})
export const catchErrorActiveCombos = () => ({type: CATCH_ERROR_ACTIVE_COMBOS})
export const stopRequestActiveCombos = () => ({type: STOP_REQUEST_ACTIVE_COMBOS})
export const receiveActiveCombos = (combos) =>({type: RECEIVE_ACTIVE_COMBOS, combos})
export const receiveDetailCombo = (combo) => ({type: RECEIVE_DETAIL_COMBO, combo})
export const receivePolicies = (policies) => ({type: RECEIVE_POLICIES, policies})

export const fetchActiveCombos = _ => async (dispatch) => {
    dispatch(startRequestActiveCombos())
    try {
        const combos = await getActiveCombosAPI();
        let policyIds = deduplicate(combos.map(item => item.policy_id))
        let policies = await Promise.all(policyIds.map(item => getPolicyAPI(item)))
        dispatch(receiveActiveCombos(combos))
        dispatch(receivePolicies(policies))
    } catch (error) {
        dispatch(catchErrorActiveCombos())
        dispatch(stopRequestActiveCombos())
        return 400     
    }
    dispatch(stopRequestActiveCombos())
    return 200
}

export const fetchDetailCombos = id => async (dispatch) => {
    dispatch(startRequestActiveCombos())
    try {
        const res = await getDetailComboAPI(id);
        dispatch(receiveDetailCombo(res.data))
        dispatch(stopRequestActiveCombos())
        return res
    } catch (error) {
        dispatch(stopRequestActiveCombos())
        return error.response   
    }
}