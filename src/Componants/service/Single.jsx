import React from 'react'
import MovingComponent from 'react-moving-text'

export default function Single(props) {

    const {title, desc,url} = props;

    return (
        <>
            <div className="col-lg-6">
                <div className="text">
                <MovingComponent
                    type="fadeInFromBottom"
                    duration="1000ms"
                    delay="1s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    
                    <h1> {title} </h1>
                    <p className='mt-4'> {desc} </p>
                </MovingComponent>
                    {/* <button className="more mt-3">
                        <a href={url}>Explore more</a>
                    </button> */}
                    <a href={url} className="more mt-3">
                        <button>Explore more</button>
                    </a>
                </div>
            </div>


        </>
    )
}
