import React,{ useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { doDeleteRegion, doRequestRegions } from "../redux/action/action"
import AddRegionRedux from "./addRegionRedux"

const RegionRedux = () => {
    let navigate = useNavigate()

    let regions = useSelector(state => state.regionsReducer.regions)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(doRequestRegions())
    })

    const editData = (id, name) => {
        navigate('/regions/update', {state: {id, name}})
    }

    const deleteData = id => {
        dispatch(doDeleteRegion(id))
    }
    
    return (
            <div className="pageTitle">
                {/* <a href="/regions/add" class="btn btn-primary"> tambah </a> */}
                <AddRegionRedux />
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
                                    <tr key={region.regionId}>
                                        <td> {i+1} </td>
                                        <td> {region.regionId} </td>
                                        <td> {region.regionName} </td>
                                        <td>
                                            <button className = "btn btn-warning" onClick={() => editData(region.regionId, region.regionName)}> Edit </button> <span/>
                                            <button className = "btn btn-danger" onClick={() => deleteData(region.regionId)}> Delete </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    )
}

export default RegionRedux