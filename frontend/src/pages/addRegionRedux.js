import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createRegion } from "../redux/action/action"

const AddRegionRedux = () => {
    let navigate = useNavigate()

    const dispatch = useDispatch()

    const [regionData, setRegionData] = useState({
        'regionName': ''
    })

    const eventHandler = region => event => {
        setRegionData({
            ...regionData,
            [region]: event.target.value
        })
    }

    const addData = e => {
        e.preventDefault()
        
        dispatch(createRegion(regionData))
        .then(()=> {
            navigate('/regions')
        })
        .catch(e => {
            alert(e)
        })
    }

    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label for="region name" className="form-label"> Region Name </label>
                    <input 
                        value={regionData.id}
                        onChange={eventHandler('regionName')}
                        type='text'
                        className="form-control"
                        placeholder="Input region name"></input>
                </div>
                <button onClick={addData} className="btn btn-primary"> Tambah data </button>
            </form>
        </div>
    )
}

export default AddRegionRedux