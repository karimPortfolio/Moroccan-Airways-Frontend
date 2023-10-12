import React , {useState , useEffect , useContext} from 'react'
import Header from '../homeComponents/header';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { flightContext } from '../appContext/myAppContext';
import UserReserInfo from './UserReserInfo';
import ResPayments from './reservConfirmComp/resPayments';
import { AllCompFooter } from '../homeComponents/footer/AllCompFooter';
import {myReservationContext} from '../appContext/ReservationContext';

export default function ReservationPayment() {

    const {calcTotalPrice} = useContext(myReservationContext);
    const {priceTotalToPay} = useContext(myReservationContext);
    const {extras} = useContext(myReservationContext);
    const {bookPicked , setBookPicked} = useContext(myReservationContext);
    const {id} = useParams();


    useEffect( () => {
        const url = `https://moroccan-flights.000webhostapp.com/api/flights/show/${id}`;
        axios.get(url)
         .then(res => {setBookPicked(res.data)})
         .catch(err => console.log(err))
    },[])

    useEffect( () => {
       calcTotalPrice();
    },[bookPicked])

  return (
    <div className='reserConfirmBg'>
          <Header/>
          <div>
                <div className="reservConfirmIntro d-flex shadow justify-content-start ps-2 ps-sm-4 ps-md-5 pt-5 align-items-center">
                    <h1 className='mt-5 ms-md-5 text-start text-white'>Reservation <span className='d-block'>Confirmation</span></h1>
                </div>
          </div>
          <div className="passngersDetails ps-sm-5">
               <h1 className='ms-3 ms-sm-5 text-start'>Your booking informations</h1>
          </div>
          <div className='d-flex justify-content-center mt-4 pb-2 mb-5'>
                <UserReserInfo />
          </div>
          <div className='py-5'>
                <div className="passngersDetails ps-sm-5">
                     <h1 className='ms-3 ms-sm-5 text-start'>Payments confirmation</h1>
                </div>
                <div>
                      <ResPayments priceTotalToPay = {priceTotalToPay} />
                </div>
          </div>
          <AllCompFooter />
    </div>
  )
}
