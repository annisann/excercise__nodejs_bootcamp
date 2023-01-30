import { Region } from "@/types/region";
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
	UPDATE_REGION_SUCCEED,
} from "@/data/actiontype";

const initialState: { regions: Region[]; error: any } = {
	regions: [],
	error: null,
};

export default function regionsReducer(state = initialState, action: any) {
	switch (action.type) {
		case FETCH_REGIONS:
			return {
				...state,
			};

		case FETCH_REGIONS_SUCCEED:
			return {
				...state,
				regions: action.data,
			};

		case FETCH_REGIONS_FAILED:
			return {
				...state,
				error: action.error,
			};

		case DELETE_REGION:
			return {
				...state,
			};
		case DELETE_REGION_SUCCEED:
			return {
				...state,
				regions: state.regions.filter(
					(region) => region.regionId != action.regionId
				),
			};

		case DELETE_REGION_FAILED:
			return {
				...state,
				error: action.error,
			};

		case ADD_REGION:
			return {
				...state,
			};

		case ADD_REGION_SUCCEED:
			return {
				...state,
				regions: [...state.regions, action.data],
			};

		case ADD_REGION_FAILED:
			return {
				...state,
				error: action.error,
			};

		case UPDATE_REGION:
			return {
				...state,
			};

		case UPDATE_REGION_SUCCEED:
			const newRegionData = {
				regionId: action.data.regionId,
				regionName: action.data.regionName,
			};

			state.regions.splice(
				state.regions.findIndex(
					(item: any) => item.regionId == action.data.regionId
				),
				1,
				newRegionData
			);

			return {
				...state,
				regions: [...state.regions],
			};

		case UPDATE_REGION_FAILED:
			return {
				...state,
				error: action.error,
			};

		default:
			return state;
	}
}
