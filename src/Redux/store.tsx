import { legacy_createStore, combineReducers } from "redux"
import { reducer as authReducer } from "./auth/reducer"

const rootReducer = combineReducers({
  authReducer,
})

export const store = legacy_createStore(rootReducer)
