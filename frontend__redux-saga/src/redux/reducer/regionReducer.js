import ActionTypes from "../constant/actiontype";

const initialState = {
	regions: []
};

function regionReducers(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.GET_REGION:
			return { ...state };

		case ActionTypes.GET_REGIONS:
			return { ...state };
		case ActionTypes.GET_REGIONS_SUCCEED:
			return { ...state, regions: action.payload };
		case ActionTypes.GET_REGIONS_FAILED:
			return { ...state, regions: action.payload };

		case ActionTypes.UPDATE_REGION:
			return { ...state };
		case ActionTypes.UPDATE_REGION_SUCCEED:
			return applyUpdateUser(state, action);
		case ActionTypes.UPDATE_REGION_FAILED:
			return applyUpdateUser(state, action);

		case ActionTypes.ADD_REGION:
			return { ...state };
		case ActionTypes.ADD_REGION_SUCCEED:
			return { ...state, regions: [...state.regions, action.payload] };
		case ActionTypes.ADD_REGION_FAILED:
			return { ...state, regions: [...state.regions, action.payload] };

		case ActionTypes.DELETE_REGION:
			return { ...state };
		case ActionTypes.DELETE_REGION_SUCCEED:
			return {
				...state,
				regions: state.regions.filter(
					(region) => region.id !== action.payload.id
				),
			};
		case ActionTypes.DELETE_REGION_FAILED:
			return {
				...state,
				regions: state.regions.filter(
					(region) => region.id !== action.payload.id
				),
			};

		default:
			return { ...state, regions: action.payload };
			// return state
			// return console.error();
	}
}

const applyUpdateUser = (state, action) => {
	return state.regions.map((region) => {
		if (region.id === action.payload.id) {
			return {
				...state,
				...action.payload,
			};
		} else {
			return state;
		}
	});
};

export default regionReducers;
