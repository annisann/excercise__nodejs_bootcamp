import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteRegion, getRegions } from "../redux/action/action"

const RegionRedux = () => {
    let navigate = useNavigate()

    let regions = useSelector(state => state.regionReducer.regions)
    console.log('regions ', regions)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getRegions())
    // }, [dispatch])

    useEffect(() => {
        dispatch(getRegions())
    })
    
    const editData = id => {
        navigate('/update')
    }

    const deleteData = id => {
        dispatch(deleteRegion(id))
    }

    return (
        <main id="main" className="main">
            <div className="pageTitle">
                <a href="/addregion" class="btn btn-primary"> tambah </a>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"> # </th>
                            <th scope="col"> Region ID </th>
                            <th scope="col"> Region Name </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            regions && regions.map((region, i) => {
                                return (
                                    <tr>
                                        <td> {i+1} </td>
                                        <td> {region.regionId} </td>
                                        <td> {region.regionName} </td>
                                        <td> <button class = "btn btn-warning"> Edit </button> </td>
                                        <td> <button class = "btn btn-danger"> Delete </button> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default RegionRedux