import { REQUEST_ACTIVE_COMBOS, STOP_REQUEST_ACTIVE_COMBOS, RECEIVE_ACTIVE_COMBOS, RECEIVE_DETAIL_COMBO, RECEIVE_POLICIES, CATCH_ERROR_ACTIVE_COMBOS } from "../actions/active-combos/types"

const initState = {
    items: [],
    policies: [],
    detail: null,
    hasError: false,
    isFetched: false,
    isFetching: false,
}

export const activeComboReducer = (state = initState, action) => {
    switch (action.type) {
        case REQUEST_ACTIVE_COMBOS:
            return {
                ...state,
                hasError: false,
                isFetching: true
            }
        case STOP_REQUEST_ACTIVE_COMBOS:
            return {
                ...state,
                isFetching: false
            }
        case CATCH_ERROR_ACTIVE_COMBOS: 
            return {
                ...state,
                hasError: true
            }
        case RECEIVE_ACTIVE_COMBOS:
            return {
                ...state,
                items: [...action.combos]
            }
        case RECEIVE_POLICIES:
            return {
                ...state,
                policies: [...action.policies],
                isFetched: true
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