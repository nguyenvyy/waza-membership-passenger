import axios from 'axios'
import { serverURL } from '../../../constant'


export const getActiveCombosAPI = () => axios(
    {
        method: 'GET',
        responseType: "json",
        url: `${serverURL}/combos/active`,
        params: {
            page: 0,
            limit: 200
        }
    }
)
// axios(
//     {
//         method: 'GET',
//         responseType: "json",
//         url: `${serverURL}/comboAPI/Promotions`,
//         params: {
//             user_name: 'admin@gmail.com',
//             service: 'food'
//         }
//     }
// ).then(res => {
//     debugger
// }).catch(err => {
//     debugger
// })

export const getDetailComboAPI = (id) => axios(
    {
        method: 'GET',
        responseType: "json",
        url: `${serverURL}/combos/${id}`,
    }
)

export const getPolicyAPI = (id) => axios(
    {
        method: 'GET',
        responseType: "json",
        url: `${serverURL}/policies/${id}`,
    }
)