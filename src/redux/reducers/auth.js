import { LOGIN, LOGOUT, STOP_REQUEST, SEND_REQUEST } from "../actions/auth/types"

const initState = {
    user: {
        name: 'Nguyên Vy',
        wallet: {
            balance: 400000,
            id: 'x'
        }
    },
    isLoggedIn: true,
    isLoading: false
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: {...action.user},
                isLoading: false,
                isLoggedIn: true
            }
        case LOGOUT:
            return initState
        case STOP_REQUEST:
            return {
                ...state,
                isLoading: false
            }
        case SEND_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}