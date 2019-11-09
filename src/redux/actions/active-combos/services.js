import axios from 'axios'
import { serverURL } from '../../../constant'


export const getActiveCombosAPI = (params, token) => axios(
    {
        method: 'GET',
        responseType: "json",
        url: `${serverURL}/combos/active`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        params
    }
)

export const getDetailComboAPI = (id, token) => axios(
    {
        method: 'GET',
        responseType: "json",
        url: `${serverURL}/combos/${id}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
)