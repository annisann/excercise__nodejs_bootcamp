import React, { useState } from 'react'

export default function Division() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const handleNum1Change = (e) => {
        setNum1(e.target.value)
    }

    const handleNum2Change = (e) => {
        setNum2(e.target.value)
    }

    const divideNumber = () => {
        setResult(parseInt(num1) / parseInt(num2))
    }
        
    return (
        <label> 
            <h1> Division </h1>
            <input onChange={handleNum1Change} onBlur={divideNumber}/>
            /
            <input onChange={handleNum2Change} onBlur={divideNumber}/>
            <br></br>
            = {result}
        </label>
    )
}
