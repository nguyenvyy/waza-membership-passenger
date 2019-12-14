import { SEND_REQUEST_WALLET, STOP_REQUEST_WALLET, CATCH_ERROR_WALLET, SAVE_WALLET_INFO, ADD_CASH, TRANSFER_CASH_TO_ELECTRONIC } from "../actions/wallet/types"

const initState = {
    electronic: null,
    cash: null,
    isFetching: false,
	isFetched: false, // wallet is fetched ?
	hasError: false,
}

export const walletReducer = (state = initState, action) => {
    switch (action.type) {
        case SEND_REQUEST_WALLET:
            return {
                ...state,
                isFetching: true,
                hasError: false
            }
        case STOP_REQUEST_WALLET:
            return {
                ...state,
                isFetching: false
            }
        case CATCH_ERROR_WALLET:
            return {
                ...state,
                hasError: true
            }
        case SAVE_WALLET_INFO: 
            return {
                ...state,
                isFetched: true,
                ...action.wallet
            }
        case ADD_CASH: 
            return {
                ...state,
                cash: state.cash + action.money
            }
        case TRANSFER_CASH_TO_ELECTRONIC:
            return {
                ...state,
                cash: state.cash - action.money,
                electronic: state.electronic + action.money
            }
        default:
            return state
    }
}