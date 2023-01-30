import regionService from "@/api/apiRegion"
import { updateRegion } from "@/store/actions/region"
import styles from "@/styles/regions.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"

export default function UpdateRegion() {
    const router = useRouter()
    const dispatch = useDispatch()
    const {id}:ParsedUrlQuery = router.query

    const regions = useSelector((state: any) => state.regionsReducer.regions)
    // const details = regions.find((item: any) => item.regionId == id)
    
    const [regionData, setRegionData] = useState({
        regionId: id,
        regionName: ''
    })
    const eventHandler = (name: string) => (event: any) => {
        setRegionData({
            ...regionData,
            [name]: event.target.value
        })
    }

    const editData = (e: any) => {
        e.preventDefault();
        dispatch(updateRegion(regionData))
    }

    return (
        <div>
            <h3> Update Region {regions.regionName} </h3>
            <form>
                <label> Region Name </label>
                <input
                    onChange={eventHandler('regionName')}
                    type='text'
                    placeholder={regionData.regionName}>
                </input>
                <div>
                    <button onClick={editData}> <Link href='/region'> submit </Link> </button>
                </div>
                <p> {regionData.regionName}</p>
            </form>
        </div>
    )
}