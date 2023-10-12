import React, { useContext , useEffect } from 'react'
import { myReservationContext } from '../../appContext/ReservationContext';


export default function ReservConfirmDetails({num}) {

       const {title , setTitle} = useContext(myReservationContext);
       const {fullName , setFullName} = useContext(myReservationContext);
       const {lastName , setLastName} = useContext(myReservationContext);
       const {nationality , setNationality} = useContext(myReservationContext);
       const {dateBirth , setDateBirth} = useContext(myReservationContext);
       const {passport , setPassport} = useContext(myReservationContext); 
       const {passChild} = useContext(myReservationContext); 
       const {passeAdultes} = useContext(myReservationContext); 
       const {totNumPassengers , setTotNumPassengers} = useContext(myReservationContext)

       useEffect( () => {
              var tot = parseInt(passChild) + parseInt(passeAdultes);
              setTotNumPassengers(tot);
       },[])

       
              return ( 
                     <div className='ReservConfirmDetails d-flex  justify-content-center align-items-center flex-column pb-5'>
                            <h5 className='text-start w-75 ps-4 ps-1 ps-sm-5 mb-4'> 
                                  <span style={{ color:'#ac0068' }}>Passengers:</span> 
                                  {title !=='' || fullName !=='' ? title+' '+fullName+' '+lastName : " passenger "+num} 
                            </h5>
                           <form action="">
                                 <div className="res_confirm_form_first_line d-flex justify-content-center justify-content-lg-between flex-column flex-lg-row">
                                      <div className='d-flex justify-content-start flex-column align-items-start'>
                                             <label for="exampleInputEmail1" className="form-label">Title <span className="text-danger">*</span></label>
                                             <select value={title} onFocus={e=>setTitle(e.target.value)} onChange={e=>setTitle(e.target.value)} className="form-select" >
                                                   {
                                                       ["Mr." , "Mrs." , "Ms."].map(tit => {
                                                           return <option value={tit} >{tit}</option>
                                                       })
                                                   }
                                             </select>
                                      </div>
                                      <div className='mt-4 mt-lg-0 d-flex justify-content-start flex-column align-items-start'>
                                             <label for="exampleInputEmail1" className="form-label">Full name <span className="text-danger">*</span></label>
                                             <input value={fullName} onChange={e=>setFullName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                      </div>
                                      <div className='mt-4 mt-lg-0 d-flex justify-content-start flex-column align-items-start'>
                                             <label for="exampleInputEmail1" className="form-label">Last name <span className="text-danger">*</span></label>
                                             <input value={lastName} onChange={e=>setLastName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                      </div>
                                 </div>
                                 <div className="res_confirm_form_first_line my-4 d-flex justify-content-center justify-content-lg-between flex-column flex-lg-row">
                                      <div className='d-flex justify-content-start flex-column align-items-start'>
                                             <label for="exampleInputEmail1" className="form-label">Nationality <span className="text-danger">*</span></label>
                                             <input value={nationality} onChange={e=>setNationality(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                      </div>
                                      <div className='mt-4 mt-lg-0 d-flex justify-content-start flex-column align-items-start'>
                                             <label for="exampleInputEmail1" className="form-label">Date Birthday</label>
                                             <input value={dateBirth} onChange={e=>setDateBirth(e.target.value)} type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                      </div>
                                      <div className='mt-4 mt-lg-0 d-flex justify-content-start flex-column align-items-start'>
                                             <label for="exampleInputEmail1" className="form-label">Passport Nº <span className="text-danger">*</span></label>
                                             <input value={passport} onChange={e=>setPassport(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                      </div>
                                 </div>
                           </form>
                     </div>
                   )
       
}
