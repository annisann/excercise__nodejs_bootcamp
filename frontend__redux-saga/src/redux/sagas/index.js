import { takeEvery, all } from "@redux-saga/core/effects";
import ActionTypes from "../constant/actiontype";
import { handleAddRegion, handleDeleteRegion, handleRegions, handleUpdateRegion } from "./regionSaga";

function* watchAll() {
	yield all([
		takeEvery(ActionTypes.GET_REGIONS, handleRegions),
		takeEvery(ActionTypes.ADD_REGION, handleAddRegion),
		takeEvery(ActionTypes.DELETE_REGION, handleDeleteRegion),
		takeEvery(ActionTypes.UPDATE_REGION, handleUpdateRegion)
	]);
}

export default watchAll;