import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Single(props) {
    useEffect(() => {
        
        ScrollReveal().reveal('.text', {
          duration: 1000,
          distance: '30px',
          delay: 300,
          opacity: 0,
          easing: 'ease-in-out',
          origin: 'bottom',
          cleanup: true 
        });
      }, []);

    const {title, desc,url} = props;

    return (
        <>
            <div className="col-lg-6">
                <div className="text">
                    <h1> {title} </h1>
                    <p className='mt-4'> {desc} </p>
                    <a href={url} className="more mt-3">
                        <button>Explore more</button>
                    </a>
                </div>
            </div>


        </>
    )
}
