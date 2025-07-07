import React from 'react'

export default function NameComponent({ name }) {
    console.log("NameComponent renders!!!")
    return (
        <div>
            Name in NameComponent: {name}
        </div>
    )
}
