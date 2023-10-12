import React , {useContext} from 'react'
import {allCountriePhoneCodes} from './phoneCode'
import { myReservationContext } from '../../appContext/ReservationContext';

export default function ReservConfirmDetails2() {

      const {countryResidence , setCountryResidence} = useContext(myReservationContext);
      const {emailAddr , setEmailAddr} = useContext(myReservationContext);
      const {mobilenum , setMobileNum} = useContext(myReservationContext);
      const {mobileCode , setMobileCode} = useContext(myReservationContext);

  return (
    <div className='ReservConfirmDetails2 d-flex  justify-content-center'>
        <form action="">
                <div className="res_confirm_form_first_line d-flex justify-content-center justify-content-lg-between flex-column flex-lg-row">
                     <div className='d-flex justify-content-start flex-column align-items-start'>
                            <label for="exampleInputEmail1" className="form-label">Country of Residence <span className="text-danger">*</span></label>
                            <input value={countryResidence} onChange={e=>setCountryResidence(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     </div>
                     <div className='d-flex justify-content-start flex-column align-items-start mt-4 mt-lg-0'>
                            <label for="exampleInputEmail1" className="form-label">Email Address <span className="text-danger">*</span></label>
                            <input value={emailAddr} onChange={e=>setEmailAddr(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     </div>
                </div>
                <div className="res_confirm_form_first_line my-4 d-flex justify-content-between">
                     <div className='d-flex justify-content-start flex-column align-items-start w-100'>
                            <label for="exampleInputEmail1" className="form-label">Mobile Nº <span className="text-danger">*</span></label>
                            <div className='d-flex w-100'>
                                  <select value={mobileCode} onChange={e=>setMobileCode(e.target.value)} className="form-select me-2" style={{ width:'90px' , overflowY:'scroll' }} aria-label="Default select example">
                                        {
                                            allCountriePhoneCodes.map(title => {
                                                return <option value={title.dial_code} selected><span> {title.dial_code} </span><span> {title.name} </span></option>
                                            })
                                        }
                                  </select>
                                  <input value={mobilenum} onChange={e=>setMobileNum(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                     </div>
                </div>
          </form>
    </div>
  )
}
