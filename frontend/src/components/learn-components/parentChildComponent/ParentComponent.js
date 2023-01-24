import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {

    const [message, setAnswer] = useState("")

    const setQuiz = (quiz) => {
        if (quiz === 'react') {
            setAnswer(`Your answer ${quiz} is true`)
        } else {
            setAnswer(`Your answer ${quiz} is false`)
        }
    }
    
    return (
        <div>
            <ChildComponent answer={message} onQuiz={setQuiz}/>
        </div>
    )
}
