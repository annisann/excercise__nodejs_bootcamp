// Return type & payload

import ActionTypes from "../constant/actiontype"
import regionService from "../service/regionService"

// Ngambil data & update ke store, pake reducer (params: action & ..)

export const createRegion = (region) => async (dispatch) => {
    try {
        const res = await regionService.create({region})

        dispatch({
            type: ActionTypes.ADD_REGION,
            payload: res.data // tampungan dari API, lalu dikirim ke store
        })

        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const getRegions = () => async(dispatch) => {
    try {
        const res = await regionService.getAll()

        dispatch({
            type: ActionTypes.GET_REGIONS,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getRegion = (id) => async(dispatch) => {
    try {
        const res = await regionService.getOne(id)

        dispatch({
            type: ActionTypes.GET_REGION,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateRegion = (data) => async(dispatch) => {
    try {
        const res = await regionService.update(data)

        dispatch({
            type: ActionTypes.UPDATE_REGION,
            payload: data
        })

        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const deleteRegion = (id) => async(dispatch) => {
    try {
        const res = await regionService.remove(id)

        dispatch({
            type: ActionTypes.DELETE_REGION,
            payload: {id}
        })

        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}