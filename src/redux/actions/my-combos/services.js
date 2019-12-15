import Axios from "axios";
import { serverURL } from "../../../constant";


export const buyComboAPI = (userId, comboId) => Axios({
    method: 'POST',
    url: `${serverURL}/combos/register`,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 20000,
    data: {
        user_name: userId,
        combo_id: comboId
    }
})

export const getMyComboAPI = userId => Axios({
    method: 'GET',
    url: `${serverURL}/passenger/mycombo`,
    responseType: 'json',
    timeout: 20000,
    params: {
        user_name: userId
    }
})
.then(res => res.data)