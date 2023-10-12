import React , {useContext} from 'react'
import { myAuthContext } from '../appContext/AuthContext'
import { flightContext } from '../appContext/myAppContext';
import Skeleton from '@mui/material/Skeleton';
import { IoIosAirplane } from "react-icons/io";
import { myReservationContext } from '../appContext/ReservationContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function DashboardReser() {
    const {loading} = useContext(flightContext);
    const {userReserv} = useContext(myAuthContext);
    const {handleCancelRes} = useContext(myReservationContext);
    const {cancellationMsg} = useContext(myReservationContext);
    const {handleClose} = useContext(myReservationContext);
    const {handleClick} = useContext(myReservationContext);
    const {open} = useContext(myReservationContext);
    const name = window.localStorage.getItem("user-name");

    //console.log(userReserv.reservation.length);

  
  return (
    <div className='pt-4 dashboardRes'>
        <div className='mb-5'>
            <h2 className='text-start w-100 ms-2 ms-md-4'>Booking</h2>
            <p className='text-start w-100 ms-2 ms-md-4'>All your flight books</p>
        </div>
  
        <div className='mb-4 ps-3 ps-md-4 pe-2 pe-md-5' style={{ width:"fit-content" }}>
            {
               cancellationMsg !== "" ? (
                  <Snackbar open autoHideDuration={6000} onClose={handleClose} style={{ position:"relative" }}>
                      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {cancellationMsg.message}
                      </Alert>
                  </Snackbar>
                ) : ("")
            }
        </div>
        <div className='ps-3 pe-2 px-sm-5'> 
                {
                   !loading ? (
                       userReserv.reservation.length > 0 ? (
                           userReserv.reservation.map(
                               res => {
                                   return(
                                     <div key={res.id} className="my-4 dashboardResCards pb-3">
                                    {
                                       <div>
                                       <div className='py-3 cardHead'>
                                             <h5 className='text-start ms-2 ms-md-4 mb-0'><span>Booking for:</span> {res.title + ' ' +res.name} </h5>
                                       </div>
                                       <div className='d-flex justify-content-start flex-column flex-md-row mt-3'>
                                                   <p className='text-start ms-2 ms-md-4'><span className='me-3'>Nationality</span>{res.nationality}</p>
                                                   <p className='text-start ms-2 ms-md-4'><span className='ms-md-4 me-3'>Passport</span>{res.passport}</p>
                                       </div>
                                       <div>
                                           <p className='text-start ms-2 ms-md-4'><span className='me-3'>From - to</span> {res.from} <IoIosAirplane /> {res.to} </p>
                                           <p className='text-start ms-2 ms-md-4'><span className='me-3'>Depart date</span> {res.dateDepart + ' ' + res.HourDepart} </p>
                                           <p className='text-start ms-2 ms-md-4'><span className='me-3'>Airport</span> {res.airport} </p>
                                       </div>
                                       <div>
                                           <p className='text-start ms-2 ms-md-4 bookInf'>Booking infortmations:</p>
                                           <p className='text-start ms-2 ms-md-4'><span className='me-3'>Booking reference</span> {res.id} </p>
                                           <p className='text-start ms-2 ms-md-4'><span className='me-3'>Booking date</span> {res.created_at} </p>
                                       </div>
                                       <div>
                                           <div className='cancelRes w-100 d-flex justify-content-start ps-2 ps-md-4 mt-4'>
                                                 <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Cancel reservation
                                                 </button>
                                           </div>
                                                                                                             
                                           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                             <div class="modal-dialog">
                                               <div class="modal-content">
                                                 <div class="modal-header">
                                                   <h1 class="modal-title fs-5" id="exampleModalLabel">Reservation cancellation</h1>
                                                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                 </div>
                                                 <div class="modal-body">
                                                      If you cancel the reservation you will not get your money back according to our policies.
                                                 </div>
                                                 <div class="modal-footer">
                                                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                   <button type="button" class="btn btn-danger confirmCancelBtn" data-bs-dismiss="modal" onClick={() => handleCancelRes(res.id) }>Confirm cancellation</button>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                       </div>
                                     </div>
                                       
                                    }
                                     </div>
                                   )
                               }
                           )
                       
                        ) : (<h5>No reservation found for {name}</h5>)
                   ) : (
                       <Skeleton variant="rectangular" className='mx-4 mt-4' height={150} />
                   )
               }
         </div>
    </div>
  )
}
