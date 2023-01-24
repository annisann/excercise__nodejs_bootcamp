import React, { useState } from 'react'
import SendNameDataChild from './sendNameDataChild'

const SendName = (props) => {
    const [firstName, setFirstName] = useState("Annisa")

    return (
        <div>
            <SendNameDataChild nama={firstName}/>
        </div>
    )
}

export default SendName
