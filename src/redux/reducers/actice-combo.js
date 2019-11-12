import { REQUEST_ACTIVE_COMBOS, STOP_REQUEST_ACTIVE_COMBOS, RECEIVE_ACTIVE_COMBOS, RECEIVE_DETAIL_COMBO, RECEIVE_POLICIES } from "../actions/active-combos/types"

const initState = {
    items: [],
    detail: null,
    isFetching: false,
    policies: []
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
                items: [...action.combos]
            }
        case RECEIVE_POLICIES:
            return {
                ...state,
                policies: [...action.policies]
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