import { combineReducers } from "redux"
import regionReducers from "../reducer/regionReducer"
import { configureStore } from "@reduxjs/toolkit"

const reducer = combineReducers({
    regionReducer: regionReducers
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export default store