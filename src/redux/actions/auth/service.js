import axios from 'axios'
import { coreURL } from '../../../constant'

export const loginAPI = (email, password) => axios(
    {
        method: 'POST',
        url: `${coreURL}/api/passengers/auth`,
        responseType: "json",
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            email,
            password
        }
    }
).then(res => res.data.token)
.catch(_ => 503)
export const getUserInfoAPI = (id, token) => axios(
    {
        method: 'GET',
        url: `${coreURL}/api/passengers/${id}`,
        responseType: "json",
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    }
)
.then(res => res.data)
.catch(_ => 404)