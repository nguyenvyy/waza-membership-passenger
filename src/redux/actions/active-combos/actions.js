import { REQUEST_ACTIVE_COMBOS, STOP_REQUEST_ACTIVE_COMBOS, RECEIVE_ACTIVE_COMBOS, RECEIVE_DETAIL_COMBO, RECEIVE_POLICIES } from "./types";
import { getActiveCombosAPI, getDetailComboAPI, getPolicyAPI } from "./services";
import { deduplicate } from "../../../utils";

export const requestActiveCombos = () => ({type: REQUEST_ACTIVE_COMBOS})
export const stopRequestActiveCombos = () => ({type: STOP_REQUEST_ACTIVE_COMBOS})
export const receiveActiveCombos = (combos) =>({type: RECEIVE_ACTIVE_COMBOS, combos})
export const receiveDetailCombo = (combo) => ({type: RECEIVE_DETAIL_COMBO, combo})
export const receivePolicies = (policies) => ({type: RECEIVE_POLICIES, policies})
export const fetchActiveCombos = _ => async (dispatch) => {
    dispatch(requestActiveCombos())
    try {
        const res = await getActiveCombosAPI();
        dispatch(receiveActiveCombos(res.data))
        let policyIds = deduplicate(res.data.map(item => item.policy_id))
        let policies = await Promise.all(policyIds.map(item => getPolicyAPI(item).then(item => item.data)))
        dispatch(receivePolicies(policies))
        dispatch(stopRequestActiveCombos())
        return res
    } catch (error) {
        dispatch(stopRequestActiveCombos())
        return error.response     
    }
}

export const fetchDetailCombos = id => async (dispatch) => {
    dispatch(requestActiveCombos())
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