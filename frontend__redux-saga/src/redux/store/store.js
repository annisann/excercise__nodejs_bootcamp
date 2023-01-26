import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import regionReducers from "../reducer/regionReducer";
import rootSaga from "../sagas";
// import {createLogger} from 'redux-logger'

// const logger = createLogger()


const reducer = combineReducers({
	regionsReducer: regionReducers,
});
const saga = createSagaMiddleware();

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(saga)
});

saga.run(rootSaga);

export default store;
