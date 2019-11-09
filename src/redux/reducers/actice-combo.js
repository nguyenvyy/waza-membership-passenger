import { REQUEST_ACTIVE_COMBOS, STOP_REQUEST_ACTIVE_COMBOS, RECEIVE_ACTIVE_COMBOS, RECEIVE_DETAIL_COMBO } from "../actions/active-combos/types"

const initState = {
    items: [],
    detail: null,
    isFetching: false
}

export const activeComboReducer = (state = initState, action) => {
    switch (action.type) {
        case REQUEST_ACTIVE_COMBOS:
            return {
                ...state,
                isFetching: true
            }
        case STOP_REQUEST_ACTIVE_COMBOS:
            return {
                ...state,
                isFetching: false
            }
        case RECEIVE_ACTIVE_COMBOS:
            return {
                ...state,
                items: [action.combos]
            }
        case RECEIVE_DETAIL_COMBO:
            return {
                ...state,
                detail: action.combo
            }
        default:
            return state
    }
}