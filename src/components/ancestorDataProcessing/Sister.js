import React, { useState } from 'react'
import { Brother } from './Brother'

export const Sister = () => {
    const [input, setInput] = useState("")



    return (
        <>
            sister of parent
            <input onChange={(e) => setInput(e.target.value)}></input>
            <Brother input={input} />

        </>
    )
}
