import React from 'react'
import { BootsTrapTab } from '../../components/Bootstraptabs/BootsTrapTab'

export const ParentComponet = () => {


    const tabData = [
        {
            header: "tab 1",
            body: "tab body one"
        },
        {
            header: "tab 2",
            body: "tab body two"
        },
        {
            header: "tab 3",
            body: "tab body three"
        },

    ]






    return (
        <>
            <BootsTrapTab tabdata={tabData} />
        </>
    )
}
