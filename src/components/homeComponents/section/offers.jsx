import React from 'react'
import MoreOffers from './offersComponents/moreOffers'
import OffersCards from './offersComponents/OffersCards'

function Offers() {
  return (
    <>
         <div className="offers my-2 py-5">
             <h3>FLYING WITH US</h3>
             <h1>Explore our flights experience and offers</h1>
             <div className='mx-5 px-sm-5'>
                 <OffersCards />
             </div>
         </div>
         <div className='pt-5 mx-sm-5 p-0 px-sm-5'>
                  <MoreOffers />
         </div>
    </>
  )
}

export default Offers