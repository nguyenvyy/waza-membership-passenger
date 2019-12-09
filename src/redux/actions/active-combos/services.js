import axios from 'axios'
import { serverURL } from '../../../constant'


export const getActiveCombosAPI = () => axios(
    {
        method: 'GET',
        responseType: "json",
        url: `${serverURL}/combos/active`,
        timeout: 10000,
        params: {
            page: 0,
            limit: 200
        }
    }
).then(res => res.data)

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
        timeout: 5000,
        url: `${serverURL}/policies/${id}`,
    }
)
.then(res => res.data)