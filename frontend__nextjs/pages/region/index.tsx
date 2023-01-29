import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteRegion, fetchRegions } from "@/store/actions/region"
import styles from "@/styles/regions.module.css"
import { Region } from "@/types/region"

export default function ShowRegion() {
    const dispatch = useDispatch()

    const regions = useSelector((state: any) => state.regionsReducer.regions)
    
    useEffect(() => {
        dispatch(fetchRegions())
    })

    const remove = (data: any) => {
        dispatch(deleteRegion(data))
    }

    return (
        <div id='region' className={styles['body-container']}>
            <h3 className={styles.pagetitle}> regions data </h3>
            <table>  {/** Region table */}
                <tbody>
                    {
                        regions.map((item: Region, i: number) => {
                            return (
                                <tr key={i} className='bg-slate-600'>
                                    <td> {item.regionName}</td>
                                    <td>
                                        <button title='edit?'> edit </button>
                                    </td>
                                    <td>
                                        <button title='delete' onClick={() => remove(item)}> delete </button>
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