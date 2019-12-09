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
.catch(err => err)

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
        timeout: 10000,
        url: `${serverURL}/policies/${id}`,
    }
)