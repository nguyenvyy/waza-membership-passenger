import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { activeComboReducer } from './actice-combo'
import { myComboReducer } from './my-combo'
import { rankReducer } from './rank-reducer'
import { walletReducer } from './wallet'
import { historyReducer } from './history'
import { notificationReducer } from './notification'

export const rootReducer = combineReducers({
    auth: authReducer,
    activeCombo: activeComboReducer,
    myCombo: myComboReducer,
    rank: rankReducer,
    wallet: walletReducer,
    history: historyReducer,
    notification: notificationReducer
})