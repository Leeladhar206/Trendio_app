
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import productReducer from "./productReducer/productReducer"
import { reducer as authReducer } from "./auth/reducer"

import thunk from "redux-thunk"

const rootReducer = combineReducers({
  productReducer,
  authReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

