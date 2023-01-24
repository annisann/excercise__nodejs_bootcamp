import ActionTypes from "../constant/actiontype";

const initialState  = {
    regions: []
}

function regionReducers(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_REGION:
            // return {...state, regions: action.payload}
            return {...state}
        case ActionTypes.GET_REGIONS:
            return {...state, regions: action.payload}
        case ActionTypes.UPDATE_REGION:
            // return {...state}
            return applyUpdateUser(state, action)
        case ActionTypes.ADD_REGION:
            return {...state}
        case ActionTypes.DELETE_REGION:
            return {
                ...state,
                regions: state.regions.filter(region => region.id !== action.payload.id)
            }
        default:
            return state
    }
}

const applyUpdateUser = (state, action) => {
    return state.regions.map((region) => {
        if (region.id === action.payload.id) {
            return {
                ...state,
                ...action.payload
            }
        } else {
            return state
        }
    })
}

export default regionReducers