import { SEND_REQUEST_WALLET, SUBTRACT_E_MONEY, STOP_REQUEST_WALLET, SAVE_WALLET_INFO, ADD_CASH, TRANSFER_CASH_TO_ELECTRONIC, CLEAR_WALLET, CATCH_ERROR_WALLET } from "./types";
import { getWalletAPI, addMoneyToCashAPI, transferCashToElectronicAPI } from "./services";

const sendRequestWallet = () => ({type: SEND_REQUEST_WALLET})
const stopRequestWallet = () => ({type: STOP_REQUEST_WALLET})
const saveWalletInfo = wallet => ({type: SAVE_WALLET_INFO, wallet})
const addCash = money => ({type: ADD_CASH, money})
const transferCashToElectronic = money => ({type: TRANSFER_CASH_TO_ELECTRONIC, money}) 
const catchErrorWallet = () => ({type: CATCH_ERROR_WALLET})
export const subtractEMoney = money => ({type: SUBTRACT_E_MONEY, money})
export const clearWallet = () => ({type: CLEAR_WALLET})

export const getWallet = () => async (dispatch, getState) => {
    dispatch(sendRequestWallet())
    try {
        const id = getState().auth.user && getState().auth.user._id
        if(!id) throw new Error(id)
        const wallet = await getWalletAPI(id)
        if(wallet === 400) throw new Error(wallet)
        dispatch(saveWalletInfo(wallet))
    } catch (error) {
        dispatch(stopRequestWallet())
        dispatch(catchErrorWallet())
        return 400
    }
    dispatch(stopRequestWallet())
    return 200
}

export const requestAddCash = money => async (dispatch, getState) => {
    dispatch(sendRequestWallet())
    try {
        const id = getState().auth.user && getState().auth.user._id
        if(!id) throw new Error(id)
        const status = await addMoneyToCashAPI(id, money)
        if(status === 400) throw new Error(status)
        dispatch(addCash(money))
    } catch (error) {
        dispatch(stopRequestWallet())
        return 400
    }
    dispatch(stopRequestWallet())
    return 200
}

export const transferCashToElectronicRequest = money => async (dispatch, getState) => {
    dispatch(sendRequestWallet())
    try {
        const id = getState().auth.user && getState().auth.user._id
        if(!id) throw new Error(id)
        const status = await transferCashToElectronicAPI(id, money)
        if(status === 400) throw new Error(status)
        dispatch(transferCashToElectronic(money))
    } catch (error) {
        dispatch(stopRequestWallet())
        return 400
    }
    dispatch(stopRequestWallet())
    return 200
}