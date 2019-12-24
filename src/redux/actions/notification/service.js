import Axios from 'axios'
import { serverURL } from '../../../constant'


export const getNotificationAPI = userId => Axios({
    method: 'GET',
    url: `${serverURL}/passenger/mynoti`,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 20000,
    params: {
        user_name: userId
    }
}).then(res => {
    return res.data.map(item => ({
        _id: item._id,
        date: new Date(item.createdAt),
        action: item.content,
        title: '-----'
    })).sort((a,b) => b.date - a.date)
})
.catch(_ => 400)