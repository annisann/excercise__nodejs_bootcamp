import regionService from '@/api/apiRegion'
import {
    ADD_REGION,
    ADD_REGION_FAILED,
    ADD_REGION_SUCCEED,
    DELETE_REGION,
    DELETE_REGION_FAILED,
    DELETE_REGION_SUCCEED,
    FETCH_REGIONS,
    FETCH_REGIONS_FAILED,
    FETCH_REGIONS_SUCCEED,
    UPDATE_REGION,
    UPDATE_REGION_FAILED,
    UPDATE_REGION_SUCCEED
} from '@/data/actiontype'
import { all, call, put, takeEvery } from 'redux-saga/effects'

function* fetchRegions(): any {
    try {
        const result = yield call(regionService.getAll)
        yield put({
            type: FETCH_REGIONS_SUCCEED,
            data: result.data,
        })
    } catch (err) {
        yield put({
            type: FETCH_REGIONS_FAILED,
            error: err
        })
    }
}

function* deleteRegion(action: any): any {
    try {
        const result = yield call(regionService.remove, action.data)
        yield put({
            type: DELETE_REGION_SUCCEED,
            data: result.data
        })
    } catch (err) {
        yield put({
            type: DELETE_REGION_FAILED,
            error: err
        })
    }
}

function* addRegion(action: any): any {
    try {
        const result = yield call(regionService.create, action.data)
        yield put({
            type: ADD_REGION_SUCCEED,
            data: result.data
        })

    } catch (err) {
        yield put({
            type: ADD_REGION_FAILED,
            error: err
        })
    }
}

function* updateRegion(action: any): any {
    try {
        const result = yield call(regionService.update, action.data)
        yield put({
            type: UPDATE_REGION_SUCCEED,
            data: result.data
        })

    } catch (err) {
        yield put({
            type: UPDATE_REGION_FAILED,
            error: err
        })
    }
}

export default function* regionSaga() {
    yield all([
        takeEvery(FETCH_REGIONS, fetchRegions),
        takeEvery(DELETE_REGION, deleteRegion),
        takeEvery(ADD_REGION, addRegion),
        takeEvery(UPDATE_REGION, updateRegion)
    ])
}