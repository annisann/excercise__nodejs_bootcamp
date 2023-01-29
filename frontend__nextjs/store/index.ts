import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import regionSaga from './sagas/regionSaga'
import reducer from './reducers/reducer'

const saga = createSagaMiddleware()
const store = configureStore({
    reducer,
    middleware: () => [saga],
})

saga.run(regionSaga)

export default store