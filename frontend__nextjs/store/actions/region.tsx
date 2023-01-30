import {
    ADD_REGION,
    DELETE_REGION,
    FETCH_REGIONS,
    UPDATE_REGION
} from "@/data/actiontype"
import { Region } from "@/types/region"

export const fetchRegions = () => {
    return { type: FETCH_REGIONS }
}

export const deleteRegion = (data: Region) => {
    return {
        type: DELETE_REGION,
        data
    }
}

export const addRegion = (data: any) => {
    return {
        type: ADD_REGION,
        data
    }
}

export const updateRegion = (data: any) => {
    return {
        type: UPDATE_REGION,
        data
    }
}