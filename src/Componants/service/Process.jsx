import React from 'react'
import './process.css'

export default function Process(props) {

    const {number1,title1,img1,desc1,title2,img2,desc2,number2} = props;

  return (
    <>
    {/* <div className="data">
        <div className="container"> */}
          {/* <h2 className='mt-5'>{heading}</h2> */}
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="chek mt-5">
                <span className='two'>{number1}</span>
                <h1 > {title1}</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <center><img src={img1} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <p className='mt-2'>{desc1}</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4  mt-5">
              <p className='mt-3'>{desc2}</p>
            </div>
            <div className="col-lg-4">
              <center><img src={img2} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="chek mt-5">
                  <h1 > {title2}</h1>
                  <span className='two'>{number2}</span>
                </div>
              </div>
          </div>
          {/* <div className="row mt-5">
            <div className="col-lg-4">
              <div className="chek mt-5">
                <span className='three'>03</span>
                <h1> {sub3}</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <center><img src={img3} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <p>{desc3}</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mt-5">
              <p>{desc4}</p>
            </div>
            <div className="col-lg-4">
              <center><img src={img4} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="chek mt-5">
                  <h1> {sub4}</h1>
                  <span className='four'>04</span>
                </div>
              </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="chek mt-5">
                <span className='five'>05</span>
                <h1> {sub5}</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <center><img src={img5} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <p>{desc5}</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mt-5">
              <p>{desc6}</p>
            </div>
            <div className="col-lg-4">
              <center><img src={img6} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="chek mt-5">
                  <h1> {sub6}</h1>
                  <span className='six'>06</span>
                </div>
              </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="chek mt-5">
                <span className='seven'>{nub7}</span>
                <h1 className='mb-4'> {sub7}</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <center><img src={img7} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <p>{desc7}</p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-4 mt-5">
              <p>{desc8}</p>
            </div>
            <div className="col-lg-4">
              <center><img src={img8} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="chek mt-5">
                  <h1> {sub8}</h1>
                  <span className='eight'>{nub8}</span>
                </div>
              </div>
          </div> */}
        {/* </div>
      </div> */}
    </>
  )
}
