import React from 'react'
import './price.css'

export default function Price(props) {

    const {heading,title1,price1,desc1,title2,price2,desc2,title3,price3,desc3} = props;

  return (
    <>
        <div className="recruit">
          <div className="container">
            <h2 >{heading}</h2>
            <div className="custom-hr">
                <hr />
            </div>
            <div className="row">
              <div className="col-lg-4 my-3">
                <div className="box">
                  <h6>{title1}</h6>
                  <h1>${price1}</h1>
                  <p>{desc1}</p>
                 
                </div>
              </div>
              <div className="col-lg-4 my-3">
                <div className="box ani ">
                  <h6>{title2}</h6>
                  <h1>${price2}</h1>
                  <p>{desc2}</p>
                 
                </div>
              </div>
              <div className="col-lg-4 my-3">
                <div className="box">
                  <h6>{title3}</h6>
                  <h1>${price3}</h1>
                  <p>{desc3}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
