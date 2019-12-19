import { SEND_REQUEST_HISTORY, STOP_REQUEST_HISTORY, CATCH_ERROR_HISTORY, RECEIVE_HISTORY, CLEAR_HISTORY } from "../actions/history/types";

const initState = {
    items: [],
    isFetching: false,
    isFetched: false,
    hasError: false
}

export const historyReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_REQUEST_HISTORY:
            return {
                ...state,
                isFetching: true,
                hasError: false
            }
        case STOP_REQUEST_HISTORY:
            return {
                ...state,
                isFetching: false
            } 
        case CATCH_ERROR_HISTORY: 
            return {
                ...state,
                hasError: true
            }
        case RECEIVE_HISTORY: 
            return {
                ...state,
                items: [...action.history],
                isFetched: true
            }
        case CLEAR_HISTORY:
            return {...initState}
        default:
            return state
    }
}