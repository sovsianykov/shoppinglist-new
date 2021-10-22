import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import orderReducer from "./opderReucer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    orderReducer
})
const store = createStore(rootReducer, compose( applyMiddleware(thunk)
    ))

export default store
