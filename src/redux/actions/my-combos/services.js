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

// for (let index = 0; index < 20; index++) {
//     let mongoObjectId = function () {
//         var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
//         return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
//             return (Math.random() * 16 | 0).toString(16);
//         }).toLowerCase();
//     };
//     buyComboAPI(mongoObjectId(), '5dff38c05f160849c0bf1ea8').then(res => {
//         console.log('success')
//     })
//     .catch(err => {
//     })
// }

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


export const autoRenewComboAPI = (comboId, userId) => Axios({
    method: 'POST',
    url: `${serverURL}/passenger/autorenew`,
    responseType: 'json',
    timeout: 20000,
    data: {
        combo_id: comboId,
        user_name: userId
    }
}).then(_ => 200)
.catch(_ => 400)


export const stopAutoRenewComboAPI = (comboId, userId) => Axios({
    method: 'POST',
    url: `${serverURL}/passenger/stoprenew`,
    responseType: 'json',
    timeout: 20000,
    data: {
        combo_id: comboId,
        user_name: userId
    }
}).then(_ => 200)
.catch(err => {
    return 400})