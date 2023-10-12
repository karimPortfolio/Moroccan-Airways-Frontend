import React , {useState} from 'react';
import { SlPlane } from "react-icons/sl";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ResBoxPart1 from './reservationBoxParts/resBoxPart1';
import ResBoxPart2 from './reservationBoxParts/resBoxPart2';

function ReservationBox() {

   const [reservPart1 , setResrvPart1] = useState(false);

   const handleReservPart2= () => {
       setResrvPart1(true);
   }
   const handleReservPart1 = () => {
       setResrvPart1(false);
   }

  return (
    <div className='reservation__box'>
         <div className='res__box'>
              <div>
                  <button className={ reservPart1 ? "btn__flightStat btn_flightS" : "btn__book btn_flightS"} onClick={handleReservPart1}> <SlPlane /> <span>Book</span> </button>
                  <button className={reservPart1 ? "btn__book" : "btn__flightStat btn__bo"} onClick={handleReservPart2}> <CheckCircleOutlineOutlinedIcon /> <span>Flight Status</span></button>
              </div>
              <div className='re__box__part1'>
                  {
                    reservPart1  ? (
                        <ResBoxPart2 style={{transition:"all .5 ease-in-out"}} />
                     ) : (
                        <ResBoxPart1 style={{transition:"all .5 ease-in-out"}} />
                     )
                  }
              </div>
         </div>
    </div>
  )
}

export default ReservationBox