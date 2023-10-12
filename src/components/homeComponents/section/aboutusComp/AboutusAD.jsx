import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";

function AboutusAD() {
  return (
    <>
        <div className='about__ad d-flex  justify-content-center justify-content-md-start align-items-center'>
              <div>
                  <h3 className='text-start'>Join For Our Discounts</h3>
                  <p className='text-start text-white my-3'>We have a lot of discount's in flight for our
                     costumers who join  us , extra baggage ,
                     upgrades and more  exclusive benefits.
                  </p>
                  <a href="" className='d-flex  justify-content-start align-items-center'>Join Now <BsBoxArrowUpRight className='ms-2' /></a>
              </div>
        </div>
    </>
  )
}

export default AboutusAD