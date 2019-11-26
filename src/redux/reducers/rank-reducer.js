import { SEND_REQUEST_RANK, STOP_REQUEST_RANK, RECEIVE_RANKS } from "../actions/rank-actions/type";


const initState = {
    items: [],
    isFetching: false,
}

export const rankReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_REQUEST_RANK:
            return {
                ...state,
                isFetching: true
            }
        case STOP_REQUEST_RANK:
            return {
                ...state,
                isFetching: false
            }
        case RECEIVE_RANKS: 
            return {
                ...state,
                items: action.ranks
            }
        default:
            return state
    }
}