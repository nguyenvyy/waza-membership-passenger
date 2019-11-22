import { STOP_REQUEST, SEND_REQUEST, RECEIVE_USER, RECEIVE_WALLTET, RECEIVE_REWARD, CLEAR_AUTH, INCREASE_BALANCE, DECREASE_BALANCE } from "./types";
import { loginAPI, getUserInfoAPI } from "./service";
import jwt from 'jwt-decode'
export const stopRequest = () => ({type: STOP_REQUEST})
export const sendRequest = () => ({type: SEND_REQUEST})
export const receiveUser = user => ({type: RECEIVE_USER, user})
export const receiveWallet = wallet => ({type: RECEIVE_WALLTET, wallet})
export const receiveReward = reward => ({type: RECEIVE_REWARD, reward})
export const clearAuth = () => ({type: CLEAR_AUTH})
//mockup wallet
export const increaseBalance = money => ({type: INCREASE_BALANCE, money})
export const decreaseBalance = money => ({type: DECREASE_BALANCE, money})

export const requestLogin = (email, password) => async (dispatch) => {
    try {
        dispatch(sendRequest())
        const token = await loginAPI(email, password)
        const id = jwt(token)._id
        const userRes = await getUserInfoAPI(id, token)
        const user = {
            ...userRes.data,
            token
        }
        dispatch(receiveUser(user))
        dispatch(stopRequest())
        return 200
    } catch (error) {
        dispatch(stopRequest())
        return 400
    }
}