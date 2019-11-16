import { SEND_REQUEST, STOP_REQUEST, RECEIVE_BOUGHT_COMBO, STOP_COMBO, RECEIVE_MY_COMBOS } from "./types";
import { buyComboAPI, getMyComboAPI } from "./services";
import moment from "moment";

export const sendRequest = () => ({type: SEND_REQUEST})
export const stopRequest = () => ({type: STOP_REQUEST})
export const receiveBoughtCombo = boughtCombo => ({type: RECEIVE_BOUGHT_COMBO, boughtCombo})
export const stopCombo = stopedCombo => ({type:STOP_COMBO, stopedCombo})
export const receiveMyCombos = myCombos => ({type: RECEIVE_MY_COMBOS, myCombos})



export const requestBuyCombo = (email, comboId) => async dispatch => {
    try {
        dispatch(sendRequest())
        const res = await buyComboAPI(email, comboId)
        dispatch(receiveBoughtCombo(res.data))
        dispatch(stopRequest())
        return 200
    } catch (error) {
        dispatch(stopRequest())
        const {response} = error
        if(response !== undefined && response.status === 400) {
            if(response.data.Error === "You have already register this combo for user")
                return 405 // combo registered
            return 400 //combo notfound
        }
        return 500 // network err
    }
}

export const requestMyCombo = email => async dispatch => {
    try {
        dispatch(sendRequest())
        const res = await getMyComboAPI(email)
        // mockup to_date
        const newMyCombo = res.data.map(item => {
            const to_date = moment(item.date).add(1,'month').format();
            return {
                ...item,
                to_date
            }
        })
        dispatch(receiveMyCombos(newMyCombo))
        dispatch(stopRequest())
        return 200
    } catch (error) {
        dispatch(stopRequest())
        return 400        
    }
}
