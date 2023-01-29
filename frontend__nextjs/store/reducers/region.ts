import { Region } from "@/types/region"
import { DELETE_REGION, DELETE_REGION_FAILED, DELETE_REGION_SUCCEED, FETCH_REGIONS, FETCH_REGIONS_FAILED, FETCH_REGIONS_SUCCEED } from "@/data/actiontype"

const initialState: {regions:Region[], error:any} = {
    regions: [],
    error: null
}

export default function regionsReducer(state = initialState, action: any) {

    switch (action.type) {
        case FETCH_REGIONS:
            return {
                ...state
            }

        case FETCH_REGIONS_SUCCEED:
            return {
                ...state,
                regions: action.data
            }

        case FETCH_REGIONS_FAILED:
            return {
                ...state,
                error: action.error
            }

        case DELETE_REGION:
            return {
                ...state
            }
            case DELETE_REGION_SUCCEED:
                return {
                    ...state,
                    regions: state.regions.filter((region) => region.regionId != action.regionId)
                }

                case DELETE_REGION_FAILED:
                    return {
                        ...state,
                        regions: state.regions.filter((region) => region.regionId != action.regionId)
                    }

        default:
            return state
    }
}