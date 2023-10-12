import React, { useContext,useState , useEffect } from 'react'
import { flightContext } from '../appContext/myAppContext'
import Button from '@mui/material/Button';
import axios from 'axios'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { IoIosAirplane } from "react-icons/io";
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';

export default function ReservationMatched() {

    const {matchedResNeeds} = useContext(flightContext);
    const [loadingRes , setLoadingRes] = useState(true);
    const {allReservations} = useContext(flightContext);

    useEffect( () => {
        setLoadingRes(true);
        setTimeout( () => {
             setLoadingRes()
        },4000)
   },[])

  return (
    <div className='reservMatched d-flex justify-content-center align-items-center flex-column px-lg-4'> 
         {
           loadingRes  ? (
               <>
                   <Skeleton variant="rounded" className='w-75 m-3' height={100} />
                   <Skeleton variant="rounded" className='w-75 m-3' height={100} />
                   <Skeleton variant="rounded" className='w-75 m-3' height={100} />
               </>
           ) : (
                matchedResNeeds.length > 0 && matchedResNeeds[0] !== undefined  ? (
                    matchedResNeeds.map(
                        reserv =>{
                            return(
                                <div key={reserv.id} className="my-3 m-lg-3 cards p-4 shadow">
                                            <div className='d-flex flex-column flex-md-row'>
                                                     <div className='d-flex justify-content-start align-items-start flex-column me-5'>
                                                         <div className='d-flex justify-content-start me-5'>
                                                              <div className='d-flex justify-content-center align-items-center flex-column'>
                                                                  <h5 className='text-start me-3'> {reserv.from} </h5>
                                                                  <p className='text-start text-secondary me-3'> {reserv.HourDepart} </p>
                                                              </div>
                                                              <div className='d-flex justify-content-center align-items-center res_hr mx-5 pb-1'>
                                                                    <IoIosAirplane className='mb-2' style={{ fontSize:'21px' }}/>
                                                              </div>
                                                              <div className='d-flex justify-content-center align-items-center flex-column'>
                                                                  <h5 className='text-start ms-3'> {reserv.to} </h5>
                                                                  <p className='text-start text-secondary ms-3'> {reserv.HourArrive} </p>
                                                              </div>
                                                         </div> 
                                                         <div className='resAirport mt-2'>
                                                               <p><FlightTakeoffIcon className='me-2 mb-2' />{reserv.airport} Airport</p>
                                                         </div>
                                                     </div>
                                                     <div className='ms-md-5 d-flex justify-content-start flex-column align-items-start'>
                                                               <div className='d-flex justify-content-start flex-column flex-sm-row'>
                                                                    <p className='text-start me-sm-3'><span>Date depart:</span> {reserv.dateDepart} </p>
                                                                    <p className='text-start'><span>Places available:</span> {reserv.placesRemain} </p>
                                                               </div>
                                                               <div className='d-flex justify-content-start flex-column flex-sm-row'>
                                                                    <p className='text-start'><span>Price Economy:</span> {reserv.priceEconomy}$</p>
                                                                    <p className='text-start  ms-sm-3'><span>Price Premium:</span> {reserv.pricePremuim}$</p>
                                                               </div>
                                                             
                                                     </div>
                                            </div>
                                            <div className="d-flex">
                                                         <Link to={'/reservation/'+reserv.id} className='text-decoration-none'><Button variant="contained" style={{ background:'#ac0068' }}>Book now</Button></Link>
                                            </div>
                                </div>
                            )
                        }
                    )
                ) : (
                    <h5 className='mx-4'>No flight available try again later</h5>
                )
             )  
            
         }
    </div>
  )
}
