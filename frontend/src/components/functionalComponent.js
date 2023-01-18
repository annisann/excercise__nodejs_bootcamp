import React, { useState } from 'react'

export default function MyFunctionalComponent() {
    const [counter, setCount] = useState(0);
    let increment = () => {
        // setCount(counter + 1)
        setCount(counter * 2)
        
    }
    let decrement = () => {
        setCount(counter -1)
    }
    return (
        <div>
            <h1> {counter} </h1>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </div>
    )
}