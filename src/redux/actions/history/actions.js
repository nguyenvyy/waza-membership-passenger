import { SEND_REQUEST_HISTORY, STOP_REQUEST_HISTORY, CATCH_ERROR_HISTORY, CLEAR_HISTORY } from "./types";
import { getHistoryAPI } from "./service";

const sendRequestHistory = () => ({type: SEND_REQUEST_HISTORY})
const stopRequestHistory = () =>({type: STOP_REQUEST_HISTORY})
const catchErrorHistory = () => ({type: CATCH_ERROR_HISTORY})
const receiveHistory = history => ({type: receiveHistory, history})
export const clearHistory  = () => ({type: CLEAR_HISTORY})
export const fetchHistory = () => async (dispatch, getState) => {
    dispatch(sendRequestHistory())
    try {
        const id = getState().auth.user && getState().auth.user._id
        if(!id) throw new Error(id)
        const history = await getHistoryAPI()
        if(history === 400) throw new Error(history)
        dispatch(receiveHistory(history)) 
    } catch (error) {
        dispatch(stopRequestHistory())
        dispatch(catchErrorHistory())
    }
    dispatch(stopRequestHistory())
    return 200
}
