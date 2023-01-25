import ActionTypes from "../constant/actiontype"

export const doRequestRegions = () => {
    return {
        type: ActionTypes.GET_REGIONS
    }
}

export const doRequestRegionSucceed = payload => {
    return {
        type: ActionTypes.GET_REGIONS_SUCCEED
    }
}

export const doRequestRegionFailed = payload => {
    return {
        type: ActionTypes.GET_REGIONS_FAILED
    }
}

export const doCreateRegion = payload => {
    return {
        type: ActionTypes.ADD_REGION
    }
}

export const doCreateRegionSucceed = payload => {
    return {
        type: ActionTypes.ADD_REGION_SUCCEED
    }
}

export const doCreateRegionFailed = payload => {
    return {
        type: ActionTypes.ADD_REGION_FAILED
    }
}

export const doUpdateRegion = payload => {
    return {
        type: ActionTypes.UPDATE_REGION
    }
}

export const doUpdateRegionSucceed = payload => {
    return {
        type: ActionTypes.UPDATE_REGION_SUCCEED
    }
}

export const doUpdateRegionFailed = payload => {
    return {
        type: ActionTypes.UPDATE_REGION_FAILED
    }
}

export const doDeleteRegion = payload => {
    return {
        type: ActionTypes.DELETE_REGION
    }
}

export const doDeleteRegionSucceed = payload => {
    return {
        type: ActionTypes.DELETE_REGION_SUCCEED
    }
}

export const doDeleteRegionFailed = payload => {
    return {
        type: ActionTypes.DELETE_REGION_FAILED
    }
}