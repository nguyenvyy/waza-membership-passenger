import { SEND_REQUEST_NOTIFICATION, STOP_REQUEST_NOTIFICATION, CATCH_ERROR_NOTIFICATION, CLEAR_NOTIFICATION, RECEIVE_NOTIFICATION } from "./types";
import { getNotificationAPI } from "./service";

const sendRequestNotification = () => ({type: SEND_REQUEST_NOTIFICATION})
const stopRequestNotification = () =>({type: STOP_REQUEST_NOTIFICATION})
const catchErrorNotification = () => ({type: CATCH_ERROR_NOTIFICATION})
const receiveNotification = notification => ({type: RECEIVE_NOTIFICATION, notification})
export const clearNotification  = () => ({type: CLEAR_NOTIFICATION})
export const fetchNotification = () => async (dispatch, getState) => {
    dispatch(sendRequestNotification())
    try {
        const id = getState().auth.user && getState().auth.user._id
        if(!id) throw new Error(id)
        const notification = await getNotificationAPI(id)
        if(notification === 400) throw new Error(notification)
        dispatch(receiveNotification(notification)) 
    } catch (error) {
        dispatch(stopRequestNotification())
        dispatch(catchErrorNotification())
    }
    dispatch(stopRequestNotification())
    return 200
}
