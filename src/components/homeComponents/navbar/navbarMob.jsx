import React from 'react'
import { useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import NavLinksMobile from './MiniNav';
import { useContext } from 'react';
import {flightContext} from '../../appContext/myAppContext'
import logo from '../../../images/myFlightLogo.png';
import NavSearch from './navSearch';
import {Link} from 'react-router-dom'



function NavbarMobile() {

  const [navActive , setNavActive] =useState(false);

  const {handleNavOpen} = useContext(flightContext);

  const handleNavActive = status => {
      setNavActive(status);
      handleNavOpen(true)
  }
  const handleNavDesactive = status => {
      handleNavOpen(status)
  }

  return (

    <nav className='mobile__navbar d-block d-lg-none'>
          <div className='d-flex justify-content-center mx-md-5'>
              <button className='hamburger__menu ms-2 me-auto border-0 bg-transparent' onClick={() => handleNavActive(true)}>
                    <DehazeIcon className='text-white' style={{fontSize:'40px'}} />
              </button>
               <Link to='/' className='app__logo me-auto mb-1 pe-3'>
                  {/* Air <span className='middle__span'>Tanger</span>  */}
                  <img src={logo} alt="" style={{ width:'75px' , height:'50px' }} />
              </Link>
               <div className='d-flex searchIconMob justify-content-center align-items-center me-3 pe-1'>
                  <NavSearch />
               </div>
              
          </div>

          <div className={navActive ? 'navlinksmob' : 'navlinksmobClose'}>
                <NavLinksMobile navstatus = {handleNavActive} handleNavDesactive = {handleNavDesactive} />
          </div>
    </nav>

  )
}

export default NavbarMobile