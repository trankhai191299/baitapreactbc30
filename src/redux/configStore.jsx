import { combineReducers, createStore } from "redux";
import { baitapReduxReducer } from "./reducer/baitapReduxReducer";


const rootReducer = combineReducers({
    baitapReduxReducer:baitapReduxReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )