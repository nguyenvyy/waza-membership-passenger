import Axios from "axios";
import { serverURL } from "../../../constant";


export const buyComboAPI = (userId, comboId) => Axios({
    method: 'POST',
    url: `${serverURL}/combos/register`,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        user_name: userId,
        combo_id: comboId
    }
})

export const getMyComboAPI = userId => Axios({
    method: 'GET',
    url: `${serverURL}/passenger/mycombo`,
    responseType: 'json',
    params: {
        user_name: userId
    }
})