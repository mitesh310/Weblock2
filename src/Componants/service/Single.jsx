
import React from 'react'

export default function Single(props) {

    const {title, desc} = props;

    return (
        <>
            <div className="col-lg-6">
                <div className="text">
                    <h1> {title} </h1>
                    <p className='mt-4'> {desc} </p>
                    <button className="more">
                        <a href="/">Explore more</a>
                    </button>
                </div>
            </div>


        </>
    )
}
