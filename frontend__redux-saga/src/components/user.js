import React from 'react'
import { useLocation } from 'react-router-dom'

export default function User() {
    const location = useLocation()
    return (
        <div>
            <h1> Bonjour {location.state.username}! </h1>
        </div>
    )
}
