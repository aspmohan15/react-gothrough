import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'



export const BootsTrapTab = ({ tabdata }) => {

    const [state, setstate] = useState(tabdata);
    console.log(state);

    return (

        <>
            <Tabs
                transition={false}>
                {/* {state.map((data, index) => { */}
                {/* return ( */}
                {/* <> */}

                <Tab eventKey="1" title="mohan">
                    {/* {data.body} */}
                </Tab>
                {/* </> */}

                {/* ) */}
                {/* }) */}
                {/* } */}


            </Tabs>
        </>

    )
}
