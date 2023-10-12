import React from 'react';
import Header from './homeComponents/header'
import UserReserInfo from './ReservatioComp/UserReserInfo';
import {AllCompFooter} from './homeComponents/footer/AllCompFooter'
import ReservationMatched from './ReservatioComp/ReservationMatched';

export const FlightsRes = () => {

  

  return (
    <div className='reservationPageBg'>
          <Header />
          <div>
                <div className="reservPageIntro d-flex shadow justify-content-start ps-2 ps-sm-4 ps-md-5 pt-5 align-items-center">
                    <h1 className='mt-5 ms-md-5 text-start text-white'>Reservation <span className='d-block'>Results</span></h1>
                </div>
          </div>
          <div className="resPageSection">
              <div className='px-2 resPageSecIntro'>
                   <span className='res-page-title-effect'></span>
                   <h1 className=''>Your reservation information</h1>
              </div>
               <div className='d-flex justify-content-center my-5'>
                  <UserReserInfo />
               </div>
               <div className='pt-4'>
                  <div className='px-2 resPageSecIntro'>
                      <span className='res-page-title-effect'></span>
                      <h1>All matched flights </h1>
                  </div>
                  <div className='mt-5'>
                      <ReservationMatched />
                  </div>
              </div>

          </div>
          <AllCompFooter />
    </div>
  )
}
