import React, { useEffect, useReducer, useState } from 'react'


export const UseReducer = () => {
    const [state, setstate] = useState(false);
    useEffect(() => {
        console.log("mohan");
        return (console.log("ClearFunction"))
    }, [state])

    const ClickHAndler = () => {
        // console.log("mmm");
        setstate(!state)
    }
    return (
        <>
            <button onClick={ClickHAndler}>Mohan</button>
        </>
    )


}