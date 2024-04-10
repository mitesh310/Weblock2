import React from 'react'

export default function ServiceImg(props) {

    const {url} = props

    return (
        <>
            <div className="col-lg-6">
                <img src={url} alt="web" />
            </div>
        </>
    )
}
