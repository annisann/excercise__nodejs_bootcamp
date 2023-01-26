import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { doUpdateRegion } from "../redux/action/action"
import regionService from "../redux/service/apiRegion"

const UpdateRegionRedux = () => {
    const {state} = useLocation()
    const {id} = state || {}
    const dispatch = useDispatch()

    let navigate = useNavigate()

    const [regionData, setRegionData] = useState({
        regionId: 0,
        regionName: ''
    })

    useEffect(() => {
        regionService.getOne(id).then(res => {
            setRegionData({
                ...regionData,
                regionId: res.data.regionId,
                // regionName: res.data.regionName
            })
        }).catch(error => alert(error))
    })
    
    const eventHandler = name => event => {        
        setRegionData({
            ...regionData,
            [name]: event.target.value
        })
        
    }

    const editData = e => {
        e.preventDefault();
        dispatch(doUpdateRegion(regionData))
        console.log(regionData)
        navigate('/regions')
    }

    return (
        <div>
            <h3> Update Region </h3>
            <form>
                <label> Region Name </label>
                <input
                    onChange={eventHandler('regionName')}
                    type='text'
                    placeholder={regionData.regionName}>
                    </input>
                <div>
                    <button onClick={editData}> Submit </button>
                </div>
                <p> {regionData.regionName}</p>
            </form>
        </div>
    )
}

export default UpdateRegionRedux