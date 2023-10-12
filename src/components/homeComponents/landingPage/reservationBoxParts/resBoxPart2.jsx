import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import {flightContext} from '../../../appContext/myAppContext'

function ResBoxPart2() {


  const {setFlightStatEmail} = useContext(flightContext)
  const {setFlightStatName} = useContext(flightContext)
  const {checkFlightStatu} = useContext(flightContext)

  return (

    <div className='row px-4'> 
           
           <div className="col-12 mt-4">
                <h5 className='text-start check__flight__title'>Check your flight status</h5>
           </div>
           <div className='col-lg-4 res__p2__p1' style={{marginTop:'25px'}}>
               <TextField id="outlined-basic" label="Full name" variant="outlined" className="resr_date_input w-100" onChange={e=>setFlightStatName(e.target.value)}  />
           </div>

           <div className='col-lg-4 res__p2__p2' style={{marginTop:'25px'}}>
               <TextField id="outlined-basic" label="Email" variant="outlined" className="resr_date_input w-100" onChange={e=>setFlightStatEmail(e.target.value)} />
           </div>
           <div className="col-lg-4">
                <LoadingButton className="me-lg-5 w-100"  variant="contained" style={{background:'#c30075' , width:'240px',marginTop:'21px'}} onClick={checkFlightStatu}>
                    <SearchIcon className="me-2" /> Check Flight
                </LoadingButton>
           </div>
    </div>

  )


}

export default ResBoxPart2