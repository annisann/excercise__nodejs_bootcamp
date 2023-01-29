import { DELETE_REGION, FETCH_REGIONS } from "@/data/actiontype"
import { Region } from "@/types/region"

// export const fetchRegions = () => async (dispatch:any) => {
//     await axios
//         .get('/regions')
//         .then(
//             ({ data }) => dispatch({ type: FETCH_REGIONS_SUCCEED, regions: data })
//         )
//         .catch(
//             (err) => dispatch({ type: FETCH_REGIONS_FAILED, error: err })
//         )
// }

export const fetchRegions = () => {
    return { type: FETCH_REGIONS }
}

export const deleteRegion = (data: Region) => {
    return {
        type: DELETE_REGION,
        data
    }
}