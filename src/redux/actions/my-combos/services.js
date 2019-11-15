import Axios from "axios";
import { serverURL } from "../../../constant";

// export const getMyCombos = () => Axios({
//     method: 'POST',
//     url: `${serverURL}/comboAPI/Promotions`
// })

export const buyComboAPI = (email, comboId) => Axios({
    method: 'POST',
    url: `${serverURL}/combos/register`,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        user_name: email,
        combo_id: comboId
    }
})