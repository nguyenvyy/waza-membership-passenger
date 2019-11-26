import { SEND_REQUEST_RANK, STOP_REQUEST_RANK, RECEIVE_RANKS } from "./type";
import { getFullRank } from "./services";

const sendRequestRanks = () => ({ type: SEND_REQUEST_RANK })
const stopRequestRanks = () => ({ type: STOP_REQUEST_RANK })
const receiveRanks = ranks => ({ ranks, type: RECEIVE_RANKS })

export const fetchRanks = () => async dispatch => {
    try {
        dispatch(sendRequestRanks())
        const res = await getFullRank()
        dispatch(receiveRanks(res.data))
        dispatch(stopRequestRanks())
    } catch (error) {
        dispatch(stopRequestRanks())        
    }
}