import React from 'react'
import TestimCarousel from './testimonialsComp/TestimCarousel'

function Testimonials() {
  return (
    <>
         <div className="testimonials my-5">
             <h3>OUR SATISFIED CLIENTS</h3>
             <h1>Testimonials</h1>
             <div className='my-5 px-lg-5'>
                 <TestimCarousel />
             </div>
         </div>
    </>
  )
}

export default Testimonials