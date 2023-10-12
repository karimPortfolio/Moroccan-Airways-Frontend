import React, { useContext } from 'react'
import { flightContext } from './appContext/myAppContext'
import Header from './homeComponents/header';
import {AllCompFooter} from './homeComponents/footer/AllCompFooter'
import { IoIosAirplane } from "react-icons/io";

export default function CheckFlightStat() {

    const {flightFound} = useContext(flightContext);
    var current_date =new Date();
    var month = current_date.getMonth()+1;
    current_date = current_date.getFullYear()+'-0'+month+'-0'+current_date.getDate(); 

  return (
    <div>
          <Header />
          <div>
                <div className="flightStatusCompIntro d-flex shadow justify-content-center justify-content-md-start ps-md-2 ps-md-4 ps-md-5 pt-5 align-items-center">
                    <h1 className='mt-4 ms-md-5 text-center text-md-start text-white'>Flight status</h1>
                </div>
          </div>
          <div className='flightStatusComp'>
                   {
                       flightFound !== '' ? flightFound.message === 'Reservation success' ? (
                               <div className='mt-4 pt-2'>
                                   <h4 className='text-start ms-md-5 ps-3 ps-sm-5 titleIntro'><span>Welcome back</span> {flightFound.reservation[0].title + ' ' +flightFound.reservation[0].name} </h4>
                                   <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                                         {
                                           
                                             flightFound.flight.map(
                                                      fli => {return(
    
                                                          fli[0].dateDepart > current_date  ? (
                                                                <div key={flightFound.reservation[0].id} className='flightStatRes bg-light rounded shadow-sm m-3 pt-0'>
                                                                   <div>
                                                                      <h4 className='text-start'><span>Reservation for:</span> {flightFound.reservation[0].title+' '+flightFound.reservation[0].name}</h4>
                                                                      <div className='d-flex justify-content-start flex-column flex-md-row mt-4'>
                                                                          <p className='text-start ms-4'><span className='me-3'>Nationality</span>{flightFound.reservation[0].nationality}</p>
                                                                          <p className='text-start ms-4'><span className='ms-md-4 me-3'>Passport</span>{flightFound.reservation[0].passport}</p>
                                                                      </div>
                                                                      <div>
                                                                          <p className='text-start ms-4'><span className='me-3'>From - to</span> {fli[0].from} <IoIosAirplane /> {fli[0].to} </p>
                                                                          <p className='text-start ms-4'><span className='me-3'>Date depart</span> {fli[0].dateDepart + ' ' + fli[0].HourDepart} </p>
                                                                          <p className='text-start ms-4'><span className='me-3'>Airport</span> {fli[0].airport} </p>
                                                                      </div>
                                                                  </div>
                                                               </div>
                                                            ) : ('')
                                                        
                                                      )}
                                                  )
                                              }
                                         
                                   </div>
                               </div>
                       ) : (<h1 className='text-center mt-5'>No reservation found for this user</h1>
                       ) : (<h1 className='text-center mt-5'>No reservation found for this user</h1>) 
                   }
          </div>
          <AllCompFooter />
    </div>
  )
}
