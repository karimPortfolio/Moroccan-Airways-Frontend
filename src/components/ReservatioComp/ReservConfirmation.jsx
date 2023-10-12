import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../homeComponents/header';
import ReservConfirmDetails from './reservConfirmComp/ReservConfirmDetails';
import ReservConfirmDetails2 from './reservConfirmComp/ReservConfirmDetails2';
import LoadingButton from '@mui/lab/LoadingButton';
import { AllCompFooter } from '../homeComponents/footer/AllCompFooter';
import SelectExtras from './reservConfirmComp/SelectExtras';
import { myReservationContext } from '../appContext/ReservationContext';
import Alert from '@mui/material/Alert';
import UserReserInfo from './UserReserInfo';
import UserReserInfoVmobile from './UserReserInfoVmobile';



export default function ReservConfirmation() {

    const [btnLoading , setBtnLoading] = useState(false);
    const {id} = useParams();
    const [bookPicked , setBookPicked] = useState({})
    const {setReserId} = useContext(myReservationContext);
    const {checkAlert} = useContext(myReservationContext);
    const {checkAllRequiredResDetails} = useContext(myReservationContext);
    const {selectedExtras} = useContext(myReservationContext)
    const {passChild} = useContext(myReservationContext); 
    const {passeAdultes} = useContext(myReservationContext); 
    const {totNumPassengers , setTotNumPassengers} = useContext(myReservationContext)
    const [userResComp , setUserResComp] = useState("");
    const parent = useRef();

    useEffect( () => {
           var tot = parseInt(passChild) + parseInt(passeAdultes);
           setTotNumPassengers(tot);
    },[])

    const passengerComponents = [];
    for (let i = 1; i <= totNumPassengers; i++) {
      passengerComponents.push(
          <ReservConfirmDetails num = {i} />
      );
    }

    // function createMarkup() {
    //     var passInfoForm = "";
    //     for (var i = 0 ; i < totNumPassengers ; i++)
    //     {
    //         passInfoForm += ' ' + "<ReservConfirmDetails />"
    //     }
    //     return {__html: passInfoForm};
    // }
    // useEffect( () => {
    //       var passInfoForm = "";
    //       for (var i = 0 ; i < totNumPassengers ; i++)
    //       {
    //           passInfoForm += ' ' + "<ReservConfirmDetails />"
    //       }
    //       setUserResComp(passInfoForm)
    //       //parent.current.innerHTML = passInfoForm;
    //       console.log(userResComp);
    // },[totNumPassengers])
    

    const hanldeBtnLoading = () => {
        setBtnLoading(true);
        setTimeout( () => {
          setBtnLoading(false);
          checkAllRequiredResDetails();
          selectedExtras();
        },4000)
    }
    useEffect( () => {
        const url = `http://127.0.0.1:8000/api/flights/show/${id}`;
        axios.get(url)
         .then(res => setBookPicked(res.data))
         .catch(err => console.log(err))
         setReserId(id);

    },[])


  return (
    <div className='reserConfirmBg'>
          <Header />
          <div>
                <div className="reservConfirmIntro d-flex shadow justify-content-start ps-2 ps-sm-4 ps-md-5 pt-5 align-items-center">
                    <h1 className='mt-5 ms-md-5 text-start text-white'>Reservation <span className='d-block'>Confirmation</span></h1>
                </div>
          </div>
          <div className="passngersDetails ps-sm-5">
               <h1 className='ms-3 ms-sm-5 text-start'>Your booking informations</h1>
          </div>
          <div className='d-none d-lg-flex justify-content-center mt-4 pb-2 mb-5'>
                <UserReserInfo />
          </div>
          <div className='d-flex d-lg-none justify-content-center flex-column align-items-center mt-4 pb-2 mb-5'>
                <UserReserInfoVmobile />
          </div>
          <div className=''>
                <div className="passngersDetails ps-sm-5">
                     <h1 className='ms-3 ms-sm-5 text-start'>Enter Passengers Details</h1>
                     <h5 className='ms-3 ms-sm-5 mt-4 text-start text-secondary'>Passenger Information</h5>
                </div>
                <div className="mx-3 mx-sm-5 px-sm-5 mt-4"> <hr /> </div>
                <div className=''>
                    <p className='text-start text-sm-end me-sm-5 pe-sm-5 ps-3 ps-sm-0'><span className='text-danger'>*</span> Required Informations</p>
                </div>
                <div ref={parent}>
                    {passengerComponents.map(
                        passComp => {
                            return passComp;
                        }
                    )}
                    {/* <ReservConfirmDetails /> */}
                    {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
                </div>
                <div className='ps-sm-5'>
                   <h5 className='ms-3 ms-sm-5 text-start text-secondary'>Contact Information</h5>
                </div>
                <div className="mx-3 px-sm-5 mx-sm-5 mt-4"> <hr /> </div>
                <div>
                    <ReservConfirmDetails2 />
                </div>
                <div className='ps-sm-5 mt-5'>
                   <h5 className='ms-3 ms-sm-5 text-start text-secondary'>Select extras</h5>
                </div>
                <div className="mx-3 px-sm-5 mx-sm-5 mt-4"> <hr /> </div>
                <div>
                    <SelectExtras />
                </div>
                <div className='d-flex justify-content-center mt-5 pt-3'>
                    <LoadingButton size="large"  loading={btnLoading} onClick={hanldeBtnLoading} variant="contained" style={{  background:'#ac0068' , width:'260px' , height:'50px' ,color:'#FFFF' }}>
                          {btnLoading ? '' : 'Continue to payments' }
                    </LoadingButton>
                </div>
                <div className={checkAlert ? 'd-flex justify-content-center mt-4 pt-2' : 'd-none'}>
                     <Alert severity="error" className='searshAlert reserConfirmAlert'>All the required inputs fields must be full</Alert>
                </div>
          </div>
                <AllCompFooter />
    </div>
  )
}
