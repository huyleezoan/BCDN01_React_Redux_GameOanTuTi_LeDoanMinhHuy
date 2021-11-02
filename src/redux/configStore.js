import { combineReducers, createStore } from "redux"
import { GameOanTuTiReducer } from './GameOanTuTiReducer.js'


const rootReducer = combineReducers({
    GameOanTuTiReducer
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());