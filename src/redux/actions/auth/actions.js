import { STOP_REQUEST, SEND_REQUEST, RECEIVE_USER, RECEIVE_WALLTET, RECEIVE_REWARD, CLEAR_AUTH, INCREASE_BALANCE, DECREASE_BALANCE } from "./types";
import { loginAPI, getUserInfoAPI } from "./service";
import jwt from 'jwt-decode'
import { setCookie } from "../../../utils";
export const stopRequest = () => ({ type: STOP_REQUEST })
export const sendRequest = () => ({ type: SEND_REQUEST })
export const receiveUser = user => ({ type: RECEIVE_USER, user })
export const receiveWallet = wallet => ({ type: RECEIVE_WALLTET, wallet })
export const receiveReward = reward => ({ type: RECEIVE_REWARD, reward })
export const clearAuth = () => ({ type: CLEAR_AUTH })
//mockup wallet
export const increaseBalance = money => ({ type: INCREASE_BALANCE, money })
export const decreaseBalance = money => ({ type: DECREASE_BALANCE, money })

export const requestLogin = (email, password, isRemember) => async (dispatch) => {
    dispatch(sendRequest())
    try {
        const token = await loginAPI(email, password)
        const id = jwt(token)._id
        const user = await getUserInfoAPI(id, token)
        const userWithToken = {
            ...user,
            token
        }
        dispatch(receiveUser(userWithToken))
        // save user info in cookie with expires: 2 days 
        if (isRemember) {
            setCookie('user-waza-membership', JSON.stringify(userWithToken), 2);
        }
    } catch (error) {
        dispatch(stopRequest())
        return 400
    }
    dispatch(stopRequest())
    return 200
}