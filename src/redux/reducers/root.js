import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { activeComboReducer } from './actice-combo'

export const rootReducer = combineReducers({
    auth: authReducer,
    activeCombo: activeComboReducer
})