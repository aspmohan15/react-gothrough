import { useEffect, useState } from "react";


export const useMyhook = () => {

    const [state, setstate] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setstate((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, []);


    return state;
}