import React, { useState } from 'react'
import ChildEmployeeData from './childEmployeeData'

export default function ParentEmployeeData() {

    const arrayObject = [
        {
            id: 101,
            fullName: 'Star Butterfly',
            salary: 98745463,
            department: 'Mewni',
            url: 'star.jpg'
        },
        {
            id: 102,
            fullName: 'Marco Diaz',
            salary: 75165153,
            department: 'Earth',
            url: 'marco.jpg'
        },
        {
            id: 103,
            fullName: 'Pony Head',
            salary: 71551364,
            department: 'Pony Head Kingdom',
            url: 'ponyhead.jpg'
        },
        {
            id: 104,
            fullName: 'Ludo',
            salary: 74652,
            department: 'Storm the Castle',
            url: 'ludo.jpg'
        },
        {
            id: 105,
            fullName: 'Glossaryck',
            salary: 25553,
            department: 'Book of Spells',
            url: 'glossaryck.jpg'
        },
        {
            id: 106,
            fullName: 'Roy',
            salary: 54853,
            department: 'IT',
            url: 'roy.jpg'
        },
        {
            id: 107,
            fullName: 'Emil',
            salary: 735835,
            department: 'IT',
            url: 'emil.jpg'
        },
        {
            id: 108,
            fullName: 'Rendra',
            salary: 5746535,
            department: 'IT',
            url: 'rendra.jpg'
        },
        {
            id: 109,
            fullName: 'Eugene',
            salary: 455425243,
            department: 'IT',
            url: 'eugene.jpg'
        },
    ]

    const [data] = useState(arrayObject)

    return (
        <div>
            <h1> Data </h1> 
            <ChildEmployeeData dataEmployee={data}></ChildEmployeeData>
        </div>
    )
}
