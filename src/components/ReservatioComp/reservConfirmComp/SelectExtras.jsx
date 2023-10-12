import React, { useContext, useState } from 'react'
import LuggageIcon from '@mui/icons-material/Luggage';
import { myReservationContext } from '../../appContext/ReservationContext';


export default function SelectExtras() {

  const [extraLuggBox  , setExtraLuggBox] = useState(false);
  const {addExtrasLugg} = useContext(myReservationContext);

  const extraLuggClick = () => {
      setExtraLuggBox(!extraLuggBox);
  }

  return (
    <div className='mt-5 selectExtras'>
          <div className='d-flex justify-contet-center align-items-center flex-column'>
              <div className='selectExtrasP1 bg-light p-3 rounded shadow-sm' onClick={extraLuggClick}>
                    <div className='d-flex justify-content-start'>
                         <LuggageIcon style={{ fontSize:'73px' , color:'#ac0068' }}/>
                         <div  className='ms-4 d-flex justify-content-start align-items-start flex-column'>
                             <h5 className='text-start' style={{ color:'#ac0068' }}>Extra luggage</h5>
                             <p className='text-start m-0'>Don’t wait until the last minute! Select your checked baggage allowance now and save on baggage fees!</p>
                         </div>
                    </div>
                    <div className={extraLuggBox ? 'row mt-5' : 'd-none'}>
                           <div className="col-12 mb-3">
                              <h5 className='text-start ms-3'>Check our extra lugguage offers</h5>
                           </div>
                          <div className='col-md-6 col-lg-3 mt-4 mt-md-0 '>
                               <LuggageIcon style={{ fontSize:'63px' , color:'#ac0068' }}/>
                               <p  className='mt-2'>0Kg Handbag</p>
                               <input type="radio" ref={addExtrasLugg} name="extralugguage" value="0" /><label className='ms-1'>0$</label>
                          </div>
                          <div className='col-md-6 col-lg-3 mt-4 mt-md-0 '>
                               <LuggageIcon style={{ fontSize:'63px' , color:'#ac0068' }}/>
                               <p  className='mt-2'>Handbag</p>
                               <input type="radio" ref={addExtrasLugg} name="extralugguage" value="11" /><label className='ms-1'>11$</label>
                          </div>
                          <div className='col-md-6 col-lg-3 mt-4 mt-lg-0 '>
                               <LuggageIcon style={{ fontSize:'63px' , color:'#ac0068' }}/>
                               <p  className='mt-2'>15Kg + Handbag</p>
                               <input type="radio" ref={addExtrasLugg} name="extralugguage" value="24" /><label className='ms-1'>24$</label>
                          </div>
                          <div className='col-md-6 col-lg-3 mt-4 mt-lg-0 '>
                               <LuggageIcon style={{ fontSize:'63px' , color:'#ac0068' }}/>
                               <p  className='mt-2'>25Kg + Handbag</p>
                               <input type="radio" ref={addExtrasLugg} name="extralugguage" value="41" /><label className='ms-1'>41$</label>
                          </div>
                   </div>
              </div>
              
          </div>
          {/* <div className='d-flex justify-contet-center align-items-center flex-column mt-4'>
              <div className='selectExtrasP2 bg-light p-3 rounded shadow-sm d-flex justify-content-start'>
                   <FastfoodIcon style={{ fontSize:'73px' , color:'#ac0068' }}/>
                   <div  className='ms-4 d-flex justify-content-start align-items-start flex-column'>
                       <h5 className='text-start' style={{ color:'#ac0068' }}>Exclusive meals</h5>
                       <p className='text-start m-0'>Pre-order your preferred meal from our Sky Café menu to get access to exclusive meals available only online and ensure that you are served first onboard the flight.</p>
                   </div>
              </div>
              <div>
                      
              </div>
          </div> */}
    </div>
  )
}
