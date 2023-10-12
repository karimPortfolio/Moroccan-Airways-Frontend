import React, { useEffect, useRef } from 'react'
import { AllCompFooter } from '../homeComponents/footer/AllCompFooter'
import Header from '../homeComponents/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ResInfo from './reserCreated/resInfo';

export default function ReserCreated() {

    const button = useRef();

    useEffect(() => {
         button.current.click();
    },[])

  return (
    <div>
         <Header />
         <div className='resCreatedModal'>
                   <button type="button" ref={button} class="btn btn-primary invisible" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   </button>
                    <div class="modal fade modal-dialog modal-dialog-centered" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                  <div>
                                      <CheckCircleIcon style={{ fontSize:'100px' , color:'green' }} />
                                  </div>
                                  <div className='mt-4'>
                                      <h3>Reservation Confirmed Successfuly</h3>
                                  </div>
                            </div>
                          </div>
                        </div>
                    </div>
        </div>
         <div className='resCreatedBg d-flex justify-content-center align-items-center'>
              <div className='w-100 ps-3 ps-sm-5'>
                  <h1 className='text-white text-start ms-md-5'>Reservation <br /> Informations</h1>
              </div>
         </div>
         <div className='resCreatedContent'>
              <div className='ps-3 ps-sm-5'>
                   <h1 className='text-start ms-md-5 mt-5'>Your Reservation:</h1>
              </div>
              <div>
                  <ResInfo />
              </div>
         </div>
         <AllCompFooter />
    </div>
  )
}
