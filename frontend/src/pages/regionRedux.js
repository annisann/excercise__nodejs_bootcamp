import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getRegions } from "../redux/action/action"

const RegionRedux = () => {
    let navigate = useNavigate()

    let regions = useSelector(state => state.regionReducer.regions)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getRegions())
    // }, [dispatch])

    useEffect(() => {
        dispatch(getRegions())
    })

    return (
        <div>
            <main id="main" className="main">
                <div className="pageTitle">
                    
                </div>
            </main>

        </div>
    )
}