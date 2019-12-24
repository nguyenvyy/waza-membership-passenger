// import uuid from 'uuid'
// import { randomNumberInRange, randomDate } from '../../../utils'
import Axios from 'axios'
import { serverURL } from '../../../constant'

// const actions = [
//     'Mua thành công',
//     'Đã sử dụng',
//     'Đã dừng gia hạn',
//     'Đã gia hạn'
// ]
// export const getHistoryAPI = (id) => {
//     const dateCreator = randomDate(new Date(2019, 1, 1), new Date(2019, 12, 30))
//     return new Promise((rs, rj) => {
//         setTimeout(() => {
//             rs(Array.from({length: 20}, () => ({
//                 _id: uuid(),
//                 action: actions[randomNumberInRange(0, 3)] + '---mockAPI',
//                 title: `Combo XX${randomNumberInRange(1, 100)}`,
//                 date: dateCreator()

//             })))
//         }, 2000)
//     })
//         .then(res => {
//             // sort
//             return res.sort((a,b) => b.date - a.date)
//         }) // {cash: number, electronic: number}
//         .catch(_ => 400)
// }

export const getHistoryAPI = userId => Axios({
    method: 'GET',
    url: `${serverURL}/passenger/myactivity`,
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