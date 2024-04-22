import React from 'react';
import './solution.css';

export default function Solution(props) {
  const { title1, desc1, img1, title2, desc2, img2 } = props;

  return (
    <>
      
          <div className="row my-5">
            <div className="col-lg-5">
              <h4>{title1}</h4>
              <p>{desc1}</p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <img className='se-img' src={img1} alt="" />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-5">
              <img className='se-img' src={img2} alt="" />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-5">
              <h4>{title2}</h4>
              <p>{desc2}</p>
            </div>
          </div>
      
    </>
  );
}
