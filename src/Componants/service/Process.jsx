import React from 'react'
import './process.css'

export default function Process(props) {

    const {number1,title1,img1,desc1,title2,img2,desc2,number2} = props;

  return (
    <>
 
          <div className="row mt-5">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="p-chek">
                <span className='two'>{number1}</span>
                <h1 > {title1}</h1>
              </div>
            </div>
            <div className="col-lg-4 separator-column">
              <hr className="column-separator" />
              <center><img className='process-img' src={img1} alt="" /></center>
            </div>
            <div className="col-lg-4 desc-text">
              <p className=''>{desc1}</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 desc-text">
              <p className=''>{desc2}</p>
            </div>
            <div className="col-lg-4 separator-column">
              <hr className="column-separator" />
              <img className="process-img" src={img2} alt="" />
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <div className="p-chek">
                  <h1 > {title2}</h1>
                  <span className='two'>{number2}</span>
                </div>
              </div>
          </div>
          

    </>
  )
}
