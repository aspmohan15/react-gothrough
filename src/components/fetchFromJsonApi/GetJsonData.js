import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'


const GetJsonData = () => {

    const [fetchApiDAta, setFetchApiDAta] = useState("")


    useEffect(async () => {
        setTimeout(async () => {

            await axios.get("https://jsonplaceholder.typicode.com/users").then(res => setFetchApiDAta(res.data)).catch((erro) => console.log(erro))
        }, 3000)
    }, []);



    return (
        <>
            <h1>{fetchApiDAta ? fetchApiDAta[0].name : "loading"}</h1>
        </>
    )


}

export default GetJsonData;