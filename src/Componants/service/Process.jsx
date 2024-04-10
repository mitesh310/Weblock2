import React from 'react'
import './process.css'

export default function Process(props) {

    const {heading,sub1,img1,desc1,desc2,img2,sub2,sub3,img3,desc3,sub4,img4,desc4,sub5,img5,desc5,sub6,img6,desc6,sub7,img7,desc7,sub8,img8,desc8} = props;

  return (
    <>
    <div className="data">
        <div className="container">
          <h2 className='mt-5'>{heading}</h2>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="chek mt-5">
                <span className='one'>01</span>
                <h1 className='mb-4'> {sub1}</h1>
              </div>
            </div>
            <div className="col-lg-4">
              <center><img src={img1} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <p>{desc1}</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4  mt-5">
              <p>{desc2}</p>
            </div>
            <div className="col-lg-4">
              <center><img src={img2} alt="" /></center>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="chek mt-5">
                  <h1> {sub2}</h1>
                  <span className='two'>02</span>
                </div>
              </div>
          </div>
          <div className="row mt-5">
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
                <span className='seven'>07</span>
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
                  <span className='eight'>08</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
