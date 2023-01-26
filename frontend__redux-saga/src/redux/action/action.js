import ActionTypes from "../constant/actiontype"

export const doRequestRegions = () => {
    return {
        type: ActionTypes.GET_REGIONS
    }
}

export const doRequestRegionsSucceed = (payload) => {
    return {
        type: ActionTypes.GET_REGIONS_SUCCEED,
        payload
    }
}

export const doRequestRegionsFailed = (payload) => {
    return {
        type: ActionTypes.GET_REGIONS_FAILED,
        payload
    }
}

export const doCreateRegion = payload => {
    return {
        type: ActionTypes.ADD_REGION,
        payload
    }
}

export const doCreateRegionSucceed = payload => {
    return {
        type: ActionTypes.ADD_REGION_SUCCEED,
        payload
    }
}

export const doCreateRegionFailed = payload => {
    return {
        type: ActionTypes.ADD_REGION_FAILED,
        payload
    }
}

export const doUpdateRegion = payload => {
    return {
        type: ActionTypes.UPDATE_REGION,
        payload
    }
}

export const doUpdateRegionSucceed = payload => {
    return {
        type: ActionTypes.UPDATE_REGION_SUCCEED,
        payload
    }
}

export const doUpdateRegionFailed = payload => {
    return {
        type: ActionTypes.UPDATE_REGION_FAILED,
        payload
    }
}

export const doDeleteRegion = payload => {
    return {
        type: ActionTypes.DELETE_REGION,
        payload
    }
}

export const doDeleteRegionSucceed = payload => {
    return {
        type: ActionTypes.DELETE_REGION_SUCCEED,
        payload
    }
}

export const doDeleteRegionFailed = payload => {
    return {
        type: ActionTypes.DELETE_REGION_FAILED,
        payload
    }
}