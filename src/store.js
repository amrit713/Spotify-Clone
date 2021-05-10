import { createStore, applyMiddleware,combineReducers} from "redux"
import {reducer} from "./services/reducer"
import {soundReducer} from "./services/soundReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

 const reducers = combineReducers({
  reducer:reducer,
  sound: soundReducer
  


})

const middleWare = [thunk]

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middleWare)))