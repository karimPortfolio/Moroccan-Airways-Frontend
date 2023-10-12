import React from 'react'
import Newsletter from './newsletter/Newsletter'
import Logo from '../../../images/myFlightLogo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import masterCard from '../../../images/mastercard.png'
import visa from '../../../images/visa.png'
import appStore from '../../../images/appStore.png'
import googlePlay from '../../../images/googlePlay.png'

function Footer() {
  return (  
    <div style={{ position:'relative' , top:'100px' }}>
         <Newsletter />
         <footer className="mt-5 bg-dark">
                
                <div className='row w-100 m-0 justify-content-center mx-md-5 px-3 px-sm-5 pt-5'>
                      
                      <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                          <h5 className='text-center text-sm-start'>Flying with us</h5>
                          <div className='mt-4 d-flex justify-content-start align-start flex-column'>
                              <a href="/" className='text-center text-sm-start'>Where we fly</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Before you fly</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Beggage</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Cargo Service</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>At the airport</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Onboard</a>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mt-4 pb-4">
                          <h5 className='text-center text-sm-start'>About us</h5>
                          <div className='mt-4 d-flex justify-content-start align-start flex-column'>
                              <a href="/" className='text-center mt-1 text-sm-start'>About us</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>media center</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Investor relations</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Company information</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Community</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Careers</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Galerry</a>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                          <h5 className='text-center text-sm-start'>Customer service</h5>
                          <div className='mt-4 d-flex justify-content-start align-start flex-column'>
                              <a href="/" className='text-center mt-1 text-sm-start'>Contact us</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Call centeres</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Office locations</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>FAQ</a>
                              <a href="/" className='text-center mt-1 text-sm-start'>Cookies policy</a>
                              
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
                          <h5 className='text-center text-sm-start'>Mobile apps</h5>
                          <div className='d-flex justify-content-center justify-content-sm-start mobileApps mt-4 pt-1'>
                             <img src={appStore} alt="" /> 
                             <img src={googlePlay} alt="" className='ms-2' /> 
                          </div>
                          <h5 className='text-center text-sm-start mt-4'>Credit cards</h5>
                          <div className='d-flex justify-content-center justify-content-sm-start creditCards mt-3 ms-2'>
                             <img src={masterCard} alt="" /> 
                             <img src={visa} alt="" className='ms-3' /> 
                          </div>
                      </div>
                </div>

                <dir className="lastPartFooter d-flex justify-content-center align-items-center flex-column flex-lg-row mt-5 px-0 pb-4 pb-lg-0 px-2 px-lg-5 mx-0 ">
                      <div className='order-1 order-lg-0 d-flex justify-content-center align-items-center flex-column flex-lg-row ms-lg-5'>
                          <p className=' mt-lg-3'> &copy;2022-2023 Morocco Airways. All Rights Reserved. By <a href="https://karim-portfolio-web.surge.sh/" target='_blank' style={{ color:"#feebf3" }}>Karim Portfolio</a> </p>
                          <div className='ms-lg-5'>
                               <a href="/" className=' m-2 text-decoration-none'>Privacy & Policy</a>
                               <a href="/" className=' m-2 text-decoration-none'>Terms & Conditions</a>
                          </div>
                      </div>
                      <dir className="order-0 order-lg-1 footerSocials ms-lg-auto d-flex justify-content-center px-0 me-lg-5">
                          <a href="/" className='text-white m-2 text-decoration-none'><InstagramIcon /></a>
                          <a href="/" className='text-white m-2 text-decoration-none'><FacebookIcon /></a>
                          <a href="/" className='text-white m-2 text-decoration-none'><TwitterIcon /></a>
                          <a href="/" className='text-white m-2 text-decoration-none'><YouTubeIcon /></a>
                      </dir>
                </dir>
         </footer>
         </div>
  )
}

export default Footer