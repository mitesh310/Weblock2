import React, { useRef } from 'react';
import Banner from '../../service/Banner'
import Discuss from '../Discuss';

export default function AngularH() {



    const customHr = <hr className="custom-hr" />;

    const getinRef = useRef(null);

    const scrollToGetin = () => {
      if (getinRef.current) {
        getinRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    


  return (
    <>
        <Banner 
         heading="Hire AngularJS Developers" 
         desc="Elevate your projects with our AngularJS developers, merging technical prowess and creative ingenuity for impactful outcomes. Join forces with our team of 80+ Angular developers dedicated to delivering innovative solutions with a focus on quality. Utilizing AI intelligence, our developers streamline development and upgrade processes, ensuring efficient project delivery, twice as fast. Partner with us to propel your projects to new heights."
         button="HIRE Angular Developer NOW"
         scrollToGetin={scrollToGetin} 
        />

        <Discuss/>
    </>
  )
}
