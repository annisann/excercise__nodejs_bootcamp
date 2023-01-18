import React, { useState } from 'react'

export default function Addition() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const handleNum1Change = e => {
        setNum1(e.target.value)
    }

    const handleNum2Change = e => {
        setNum2(e.target.value)
    }

    const addNumbers = () => {
        setResult(parseInt(num1) + parseInt(num2))
    }
        
    return (
        <div> 
            <h1> Addition </h1>
            <input onChange={handleNum1Change} onBlur={addNumbers}/>
            + 
            <input onChange={handleNum2Change} onBlur={addNumbers}/>
            <br></br>
            = {result}
        </div>
    )
}
