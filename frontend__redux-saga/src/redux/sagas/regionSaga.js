/* eslint-disable import/no-anonymous-default-export */
import { call, put } from "redux-saga/effects";
import ApiRegion from "../service/apiRegion";
import {
	doCreateRegionFailed,
	doCreateRegionSucceed,
	doDeleteRegionFailed,
	doDeleteRegionSucceed,
	doRequestRegionsFailed,
	doRequestRegionsSucceed,
	doUpdateRegionFailed,
	doUpdateRegionSucceed,
} from "../action/action";

function* handleRegions() {
	try {
		const result = yield call(ApiRegion.getAll);
		yield put(doRequestRegionsSucceed(result.data));
	} catch (error) {
		yield put(doRequestRegionsFailed(error));
	}
}

function* handleAddRegion(action) {
	try {
		const result = yield call(ApiRegion.create, action.payload);
		yield put(doCreateRegionSucceed(result.data));
	} catch (error) {
		yield put(doCreateRegionFailed(error));
	}
}

function* handleUpdateRegion(action) {
	try {
		const result = yield call(ApiRegion.update, action.payload);
		yield put(doUpdateRegionSucceed(result.data));
	} catch (error) {
		yield put(doUpdateRegionFailed(error));
	}
}

function* handleDeleteRegion(action) {
	try {
		const result = yield call(ApiRegion.remove, action.payload);
		yield put(doDeleteRegionSucceed(result.data));
	} catch (error) {
		yield put(doDeleteRegionFailed(error));
	}
}

export {
	handleAddRegion,
	handleRegions,
	handleDeleteRegion,
	handleUpdateRegion
}