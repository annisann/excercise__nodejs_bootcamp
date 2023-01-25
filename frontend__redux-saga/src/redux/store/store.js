import { applyMiddleware, combineReducers, createStore } from "redux"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import regionReducers from "../reducer/regionReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const reducer = combineReducers({
    regionReducer: regionReducers
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store