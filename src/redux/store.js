import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import orderReducer from "./opderReucer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    orderReducer
})
const store = createStore(rootReducer, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store
