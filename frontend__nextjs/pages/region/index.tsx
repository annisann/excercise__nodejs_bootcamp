import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addRegion, deleteRegion, fetchRegions, updateRegion } from "@/store/actions/region"
import styles from "@/styles/regions.module.css"
import { Region } from "@/types/region"
import Link from "next/link"

export default function ShowRegion() {
    const dispatch = useDispatch()

    // Data
    const regions = useSelector((state: any) => state.regionsReducer.regions)

    useEffect(() => {
        dispatch(fetchRegions())
    })

    const ButtonText = {
        init: 'add new region',
        add: 'add region'
    }

    const [buttonText, setButtonText] = useState(ButtonText.init)
    const [regionData, setRegionData] = useState({
        regionName: ''
    })

    const inputRegionHandler = (param: string) => (event: any) => {
        setRegionData({
            ...regionData,
            [param]: event.target.value
        })
    }

    const handleClick = () => {
        /**
         * if `add new region` button clicked, form will appear
         * & button text will change to `add region`
        */

        const inputField: any = document.getElementById('input-newRegion')

        // Show input field when button clicked
        inputField.classList.remove('hidden')
        setButtonText("add region")

        /** If new region added, the input will be hidden also */
        if (buttonText == ButtonText.add) {
            // Add data to database
            dispatch(addRegion(regionData))

            // Make the input field hidden and change button text
            inputField.classList.add('hidden')
            setButtonText(ButtonText.init)
        }
    }

    const remove = (data: Region) => {
        dispatch(deleteRegion(data))
    }

    return (
        <div className={styles['body-container']}>
            <h3 className={styles.pagetitle}> regions data </h3>
            <div className="container-addRegion">
                <input
                    title="input desired region here"
                    placeholder="region name"
                    id='input-newRegion'
                    className={`${styles['form-newRegion']} hidden`}
                    onChange={inputRegionHandler('regionName')} />
                <button className={styles['btn-addRegion']} onClick={handleClick}> {buttonText} </button>
            </div>

            <div className={styles['table-container']}>
                <div className={`${styles['table-overflow-container']} sm:-mx-6 lg:-mx-8`}>
                    <div className={`${styles['table-overflow']} sm:px-6 lg:px-8`}>
                        <div className="overflow-hidden">
                            <table className={`${styles['data-table']} `}>  {/** Region table */}
                                <tbody>
                                    {
                                        regions.map((item: Region, i: number) => {
                                            return (
                                                <tr key={i}>
                                                    <td> {item.regionName} </td>
                                                    <td className={styles['btn-container']}>
                                                        <button
                                                            title="edit region's name">
                                                            <Link href={`region/${item.regionId}`}> edit </Link>
                                                        </button>

                                                    </td>
                                                    <td className={styles['btn-container']}>
                                                        <button
                                                            title="delete regions :O"
                                                            onClick={() => remove(item)}> delete </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}