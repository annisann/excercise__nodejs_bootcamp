import React from 'react'
import { useLocation } from 'react-router-dom'

export default function User() {
    const location = useLocation()
    return (
        <body>
            <p> Log In Succeed! Bonjour {location.state.username}! </p>
        </body>
    )
}
