import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import RegionService from "../../redux/service/regionService"

const AddRegionRedux = () => {
    let navigate = useNavigate()

    const dispatch = useDispatch()
    
    const [regionData, setRegionData] = useState({
        id: 0,
        regionName: '',
        
    })

    const eventHandler = name => event => {
        setRegionData({
            ...regionData,
            [name]: event.target.value
        })
    }

    const addData = e => {
        e.preventDefault()
        dispatch(create())
    }
}