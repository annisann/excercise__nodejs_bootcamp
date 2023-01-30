import { updateRegion } from "@/store/actions/region"
import styles from "@/styles/regions.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function UpdateRegion() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { id }: ParsedUrlQuery = router.query

    const regions = useSelector((state: any) => state.regionsReducer.regions).find((item: any) => item.regionId == id)

    const [regionData, setRegionData] = useState({
        regionId: regions.regionId,
        regionName: regions.regionName
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
        <div className={styles['body-container']}>
            <h3> updating region '{regions.regionName}' </h3>
            <form>
                <label> to: </label>
                <input
                    title='Input region name'
                    onChange={eventHandler('regionName')}
                    type='text'
                    placeholder={regionData.regionName}>
                </input>
                <div className={styles['btn-container']}>
                    <button onClick={editData}> <Link href='/region'> submit </Link> </button>
                </div>
            </form>
        </div>
    )
}