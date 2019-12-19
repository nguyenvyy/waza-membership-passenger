import Axios from "axios";
import { paymentURL } from "../../../constant";

/**
 *  API get wallet of user by ID
 * @param {string} id user id
 */
export const getWalletAPI = async (id) => {
    let electronic, cash
    try {
        electronic = await Axios({
            method: 'GET',
            url: `${paymentURL}/wallet/${id}`,
            responseType: "json",
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.data)
        if (electronic.response === 'NO DATA RECEIVE') {
            await Axios({
                method: 'POST',
                url: `${paymentURL}/create_wallet`,
                responseType: "json",
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    user_id: id
                }
            })

            electronic = await Axios({
                method: 'GET',
                url: `${paymentURL}/wallet/${id}`,
                responseType: "json",
                timeout: 20000,
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => res.data)
        }
        cash = await Axios({
            method: 'GET',
            url: `${paymentURL}/cash/${id}`,
            responseType: "json",
            timeout: 20000,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.data.value)
    } catch (error) {
        return 400
    }
    return ({
        cash, electronic: electronic.value
    })
}

// mockAPI
// export const getWalletAPI = (id) => {
//     return new Promise((rs, rj) => {
//         setTimeout(() => {
//             rs({ cash: 10000, electronic: 100000 })
//         }, 2000)
//     })
//         .then(res => res) // {cash: number, electronic: number}
//         .catch(_ => 400)
// }

/**
 * API add money to cash wallet
 * @param {string} id user id
 * @param {number} money money to be added
 * @returns {Promise<200 | 400>} status
 */
export const addMoneyToCashAPI = (id, money) => Axios({
    method: 'POST',
    url: `${paymentURL}/cash`,
    responseType: "json",
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        user_id: id,
        value: money
    }
})
    .then(_ => 200)
    .catch(_ => 400)

// mockAPI
// export const addMoneyToCashAPI = (id, money) => {
//     return new Promise((rs, rj) => {
//         setTimeout(() => {
//             rs(200)
//         }, 2000)
//     })
//         .then(_ => 200)
//         .catch(_ => 400)
// }

/**
 * API transfer money from cash to waza-wallet
 * @param {string} id user id
 * @param {number} money money to be transferred
 * @returns {Promise<200 | 400>} status
 */
export const transferCashToElectronicAPI = (id, money) => Axios({
    method: 'POST',
    url: `${paymentURL}/transfer_from_cash`,
    responseType: "json",
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        user_id: id,
        value: money
    }
})
    .then(_ => 200)
    .catch(_ => 400)

// mockAPI
// export const transferCashToElectronicAPI = (id, money) => {
//     return new Promise((rs, rj) => {
//         setTimeout(() => {
//             rs(200)
//         }, 2000)
//     })
//         .then(_ => 200)
//         .catch(_ => 400)
// }