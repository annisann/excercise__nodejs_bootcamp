import React from 'react'

function CalculatorOperations(props) {

    return (
        <div id='operation-container'>
            {/* Addition */}
            <button onClick={() => props.operation('addition')}> + </button>

            {/* Substraction */}
            <button onClick={() => props.operation('substraction')}> - </button>

            {/* Multiplication */}
            <button onClick={() => props.operation('multiplication')}> * </button>

            {/* Division */}
            <button onClick={() => props.operation('division')}> / </button>

            <h2> {props.result} </h2>
        </div>
    )
}

export default CalculatorOperations
