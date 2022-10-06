import React, { useRef, useState } from 'react'
import { Form } from 'react-bootstrap';

export const FormValidate = () => {


    const ref = useRef()

    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(false)
    const [touchInputValue, setTouchInputValue] = useState(false);

    const validateData = !inputValue && touchInputValue


    const enterNameValid = inputValue.trim() === ""

    if (enterNameValid) {

    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setTouchInputValue(true)
        if (inputValue.trim() === "") {
            return
        }
        setInputValue(e.target.value)
        setInputValue("")
        console.log(inputValue);
    }


    return (

        <div>
            <Form onSubmit={submitHandler}>
                <input ref={ref} type={"text"} onChange={handleChange} value={inputValue}></input>
                <p>
                    {validateData && <p>enter name please </p>}
                </p>
                <input type={"submit"}></input>
                {/* <button disabled={ }></button> */}
            </Form>
        </div >
    )

}

