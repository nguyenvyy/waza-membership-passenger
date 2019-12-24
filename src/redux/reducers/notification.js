import { SEND_REQUEST_NOTIFICATION, STOP_REQUEST_NOTIFICATION, CATCH_ERROR_NOTIFICATION, RECEIVE_NOTIFICATION, CLEAR_NOTIFICATION } from "../actions/notification/types";

const initState = {
    items: [],
    isFetching: false,
    isFetched: false,
    hasError: false
}

export const notificationReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_REQUEST_NOTIFICATION:
            return {
                ...state,
                isFetching: true,
                hasError: false
            }
        case STOP_REQUEST_NOTIFICATION:
            return {
                ...state,
                isFetching: false
            } 
        case CATCH_ERROR_NOTIFICATION: 
            return {
                ...state,
                hasError: true
            }
        case RECEIVE_NOTIFICATION: 
            return {
                ...state,
                items: [...action.notification],
                isFetched: true
            }
        case CLEAR_NOTIFICATION:
            return {...initState}
        default:
            return state
    }
}