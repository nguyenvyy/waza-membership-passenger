import jwt from 'jwt-decode'
import { STOP_REQUEST, SEND_REQUEST, RECEIVE_USER, CLEAR_AUTH, INCREASE_BALANCE, DECREASE_BALANCE } from "./types";
import { loginAPI, getUserInfoAPI } from "./service";
export const stopRequest = () => ({ type: STOP_REQUEST })
export const sendRequest = () => ({ type: SEND_REQUEST })
export const receiveUser = user => ({ type: RECEIVE_USER, user })
export const clearAuth = () => ({ type: CLEAR_AUTH })
//mockup wallet
export const increaseBalance = money => ({ type: INCREASE_BALANCE, money })
export const decreaseBalance = money => ({ type: DECREASE_BALANCE, money })

export const requestLogin = (email, password) => async (dispatch) => {
    let user, token
    dispatch(sendRequest())
    try {
        token = await loginAPI(email, password)
        if (token === 503) throw new Error(token)
        const id = jwt(token)._id
        user = await getUserInfoAPI(id, token)
        if (user === 404) throw new Error(user)

    } catch (error) {
        dispatch(stopRequest())
        return {status: 400}
    }
    const userWithToken = {
        ...user,
        token
    }
    dispatch(receiveUser(userWithToken))
    dispatch(stopRequest())
    return { status: 200, user: userWithToken}
}