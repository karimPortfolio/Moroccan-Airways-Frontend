import React from 'react';
import {NavLink} from 'react-router-dom';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function MoreOffers() {
  return (
    <> 
        <div className="moreOffers">
             <div className="row w-100 m-0 justify-content-center">
                 <NavLink to='/' className = 'text-decoration-none col-lg-5'>
                        <div className="moreOfferP1 m-4 shadow d-flex  flex-column justify-content-end align-content-end">
                               <h5 className='text-white ps-3  text-start'>Tangier <TrendingFlatIcon /> Dubai</h5>
                               <h1 className='text-white ps-3  text-start'>Dubai</h1>
                               <p className='text-white  ps-3 text-start'>From 600$</p>
                        </div>
                 </NavLink>
                 <NavLink to='/' className = 'col-lg-5 text-decoration-none'>
                        <div className="moreOfferP2 m-4 shadow d-flex  flex-column justify-content-end align-content-end">
                               <h5 className='text-white ps-3  text-start'>Tangier <TrendingFlatIcon /> Swiss</h5>
                               <h1 className='text-white ps-3  text-start'>Swiss</h1>
                               <p className='text-white  ps-3 text-start'>From 400$</p>
                        </div>
                 </NavLink>
             </div>
        </div>
    </>
  )
}

export default MoreOffers