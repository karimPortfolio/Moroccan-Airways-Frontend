import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Newsletter() {
  return (
    <>
         <div className="newsletter px-0 px-sm-5 mx-sm-5">
             <div className="row w-100 m-0 px-md-5 py-5">
                 <div className="col-md-5 ps-md-5">
                    <h5 className='text-center text-md-start ps-lg-5'>Subscribe to our</h5>
                    <h2 className='text-center text-md-start ps-lg-5'>Newsletter</h2>
                 </div>
                 <div className="col-md-7 pt-4">
                     <div className='newsletter_email_input p-2 p-sm-0 d-flex'>
                         <TextField id="outlined-basic" label="Email" variant="outlined" className='newsletter_input w-100 w-sm-50' />
                         <Button variant="contained" size="large" style={{ background:'#ac0068' , height:'56px'}} className='ms-3'>
                              Subscribe
                         </Button>
                     </div>
                 </div>
             </div>
         </div>
    </>
  )
}

export default Newsletter