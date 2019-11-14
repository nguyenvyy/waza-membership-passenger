import axios from 'axios'
import { coreURL } from '../../../constant'

export const loginAPI = (email, password) => axios(
    {
        method: 'POST',
        url: `${coreURL}/api/passengers/auth`,
        responseType: "json",
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            email,
            password
        }
    }
).then(res => res.data.token)
.catch(err => err)
export const getUserInfoAPI = (id, token) => axios(
    {
        method: 'GET',
        url: `${coreURL}/api/passengers`,
        responseType: "json",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        params: {
            id
        }
    }
)