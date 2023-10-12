import React, { useContext, useEffect, useState } from 'react'
import {flightContext} from '../../appContext/myAppContext';
import { myReservationContext } from '../../appContext/ReservationContext'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { IoIosAirplane } from "react-icons/io";
import logo from '../../../images/myFlightLogo.png'
import QRcode from '../../../images/QRcode.jpeg'

export default function ResInfo() {

  const {title} = useContext(myReservationContext);
  const {fullName} = useContext(myReservationContext);
  const {lastName} = useContext(myReservationContext);
  const {passeAdultes} = useContext(myReservationContext);
  const {passChild} = useContext(myReservationContext);
  const {classChoice} = useContext(myReservationContext);
  const {bookPicked} = useContext(myReservationContext);
  

  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      
         <div className='reservation-card w-75 p-4'>
             <div className='logo'>
                 <div>
                      <img src={logo} alt="" />
                 </div>
                 <div className='mt-2 mb-4'>
                      <h5>Morocco Airways</h5>
                 </div>
             </div>
             <div className="row">
                 <div className="col-lg-6 d-flex reservation-user-info justify-content-center align-items-center flex-column ps-5">
                     <div className='w-100'>
                        <h5 className='text-start'>Reservation for: <span className='fw-light text-dark'> {title+' '+fullName+' '+lastName} </span></h5>
                     </div>
                     <div className='mt-3 w-100'>
                           <p className='text-start'>From - to: <span className='text-dark'>{bookPicked.from} <IoIosAirplane /> {bookPicked.to}</span> </p>
                           <p className='text-start'>Date Depart: <span className='text-dark'>{bookPicked.dateDepart + ' ' +bookPicked.HourDepart}</span> </p>
                           <p className='text-start'>Class: <span className='text-dark'>{classChoice !== "" ? classChoice : "Economy"}</span> </p>
                           <p className='text-start'>Passengers: <span className='text-dark'>{parseInt(passeAdultes)+parseInt(passChild)}</span> </p>
                     </div>
                 </div>
                 <div className="col-lg-6 QRcode d-flex justify-content-center justify-content-sm-end mt-4 mt-lg-0 pe-sm-5">
                     <img src={QRcode} alt="" className='mt-auto mb-auto' />
                 </div>
             </div>
         </div>
       
    </div>
  )
}
