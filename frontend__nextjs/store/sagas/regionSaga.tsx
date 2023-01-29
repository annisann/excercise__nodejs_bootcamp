
import regionService from '@/api/apiRegion'
import { DELETE_REGION, DELETE_REGION_FAILED, DELETE_REGION_SUCCEED, FETCH_REGIONS, FETCH_REGIONS_FAILED, FETCH_REGIONS_SUCCEED } from '@/data/actiontype'
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

// function* addRegion(): any {
//     try {

//     } catch (error) {

//     }
// }

// function* updateRegion(): any {
//     try {

//     } catch (error) {

//     }
// }

function* deleteRegion(action: any): any {
    console.log('deleteRegion at saga', action)
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

export default function* regionSaga() {
    yield all([
        takeEvery(FETCH_REGIONS, fetchRegions),
        takeEvery(DELETE_REGION, deleteRegion)
    ])
}