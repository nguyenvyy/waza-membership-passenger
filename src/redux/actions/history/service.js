import uuid from 'uuid'
import { randomNumberInRange, randomDate } from '../../../utils'

const actions = [
    'Mua thành công',
    'Đã sử dụng',
    'Đã dừng gia hạn',
    'Đã gia hạn'
]


export const getHistoryAPI = (id) => {
    const dateCreator = randomDate(new Date(2019, 1, 1), new Date(2019, 12, 30))
    return new Promise((rs, rj) => {
        setTimeout(() => {
            rs(Array.from({length: 20}, () => ({
                _id: uuid(),
                action: actions[randomNumberInRange(0, 3)],
                title: `Combo XX${randomNumberInRange(1, 100)}`,
                date: dateCreator()

            })))
        }, 2000)
    })
        .then(res => res) // {cash: number, electronic: number}
        .catch(_ => 400)
}