import React from 'react'
import img1 from '../../../../images/Screenshot 2023-02-02 at 13.45.33.png'
import img2 from '../../../../images/Screenshot 2023-02-02 at 13.45.47.png'
import img3 from '../../../../images/Screenshot 2023-02-02 at 13.46.03.png'
import img4 from '../../../../images/Screenshot 2023-02-02 at 13.45.16.png'
import AboutusCarousel from '../aboutusComp/aboutusCarousel'
import MoreOffers from './moreOffers'

function OffersCards() {
  return (
    <>
        <div className="row justify-content-center offersCards mt-5 pt-5">
            <div className="col-lg-2 shadow-lg p-0 py-4 mx-4 mt-3">
                <h5>CABIN FEATURES</h5>
                <h4>First Class</h4>
                <img src={img1} alt="" className='w-100 h-100' />
            </div>
            <div className="col-lg-2 shadow-lg mt-5 mt-lg-3 p-0 py-4 mx-4 mt-lg-3">
                <h5>CABIN FEATURES</h5>
                <h4>Business Class</h4>
                <img src={img2} alt="" className='w-100 h-100' />
            </div>
            <div className="col-lg-2 shadow-lg mt-5 mt-lg-3 p-0 py-4 mx-4 mt-lg-3">
                <h5>CABIN FEATURES</h5>
                <h4>Premium Class</h4>
                <img src={img3} alt="" className='w-100 h-100' />
            </div>
            <div className="col-lg-2 shadow-lg mt-5 mt-lg-3 p-0 py-4 mx-4 mt-lg-3">
                <h5>CABIN FEATURES</h5>
                <h4>Economy Class</h4>
                <img src={img4} alt="" className='w-100 h-100' />
            </div>
        </div>
    </>
  )
}

export default OffersCards