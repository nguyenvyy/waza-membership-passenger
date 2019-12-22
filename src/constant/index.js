import { rewardVirtualService, coreVirtualService } from "../test/virtual-service"

export const serverURL = 'https://dnguyen-combo-manager.herokuapp.com'

export let coreURL = 'https://waza-passenger.herokuapp.com'
export const loginRoute = `${coreURL}/passengers/auth`
export const getPassengerRoute = id => `${coreURL}/passengers/${id}`

export let rewardURL = 'https://safe-caverns-44957.herokuapp.com'
export const paymentURL = 'https://waza-payment-258904.appspot.com'
export const formatOfDateFromDB = 'YYYY/MM/DD'
export const dateFormat = 'DD/MM/YYYY' 

// setup virtual service
if(process.env.NODE_ENV === "test") {
    rewardURL = rewardVirtualService
    coreURL = coreVirtualService
}