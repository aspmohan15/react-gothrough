import React, { useRef, useState } from 'react'

export const UseEffectHooksExplore = () => {
    const [data, setData] = useState({ name: "mohan" }, (mohan) => console.log("last"))
    const useEffectHooksExplore = "mohan"


    const mohan = () => console.log("mohan");

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()

    return (
        <>
            <input
                ref={ref1}
                onChange={(e) => ref2.current.focus()}
                onKeyDown={(e) => ref2.current.focus()}
            >

            </input>
            <input
                ref={ref2}
                onChange={(e) => ref3.current.focus()}
                onKeyDown={(e) => ref3.current.focus()}>

            </input>
            <input
                ref={ref3}
                onChange={(e) => ref4.current.focus()}
                onKeyDown={(e) => ref4.current.focus()}>

            </input>
            <input
                ref={ref4}
                onChange={(e) => ref5.current.focus()}
                onKeyDown={(e) => ref5.current.focus()}>

            </input>
            <input
                ref={ref5}
                onChange={(e) => ref6.current.focus()}
                onKeyDown={(e) => ref6.current.focus()}>

            </input>
            <input
                ref={ref6}
                onChange={(e) => ref6.current.focus()}
                onKeyDown={(e) => ref6.current.focus()}>

            </input>
        </>)


}
