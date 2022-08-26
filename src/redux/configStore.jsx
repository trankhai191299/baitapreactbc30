import { combineReducers, createStore } from "redux";
import { reactFormReducer } from "./reducer/reactFormReducer";


const rootReducer = combineReducers({
    reactFormReducer:reactFormReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )