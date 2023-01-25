import React, { useState } from 'react'
import CalculatorOperations from './calculatorOperations'

function Calculator() {
    const [numbers, setNumbers] = useState([0, 0])
    const [index, setIndex] = useState(0)
    const [result, setResult] = useState()

    // To update the input field, store in array
    function handleIndex(index) {
        setIndex(index)
    }

    // To update the state arrays based on index field
    function handleInputChange(event) {
        const newNumbers = [...numbers]
        newNumbers[index] = parseInt(event.target.value)
        setNumbers(newNumbers)
    }

    function operationType (type) {
        if (type === 'addition') {
            setResult(numbers[0] + numbers[1])
        }
        if (type === 'substraction') {
            setResult(numbers[0] - numbers[1])
        }
        if (type === 'multiplication') {
            setResult(numbers[0] * numbers[1])
        }
        if (type === 'division') {
            setResult(numbers[0] / numbers[1])
        }
    }

    return (
        <div id='calculator-interface'>
            <h1> Calculator </h1>
            <input
                type='number'
                onChange={handleInputChange}
                onFocus={() => handleIndex(0)}
            ></input>
            
            <input
                type='number'
                onChange={handleInputChange}
                onFocus={() => handleIndex(1)}
            ></input>

            <CalculatorOperations
                // Choose operation type
                operation={operationType}
                // Result of the number operations
                result = {result}
            />
        </div>
    )
}

export default Calculator
