import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSearch from './navSearch';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import {flightContext} from '../../appContext/myAppContext'
import Avatar from '@mui/material/Avatar';
import {myAuthContext} from '../../appContext/AuthContext';
import {Link} from 'react-router-dom'

function NavLinksMobile({navstatus,handleNavDesactive}) {

      const {isAuthincated} = useContext(myAuthContext);
      const {navOpen , setNavOpen} = useContext(flightContext)

      const handleNavC = () => {
            navstatus(false);
            handleNavDesactive(false);
      }

  return (
    <div>
          <div className='nav__close__btn d-flex justify-content-end pt-3 pe-2' onClick = {handleNavC}>
                <CloseIcon  />
          </div>

          <div className='d-flex flex-column justify-content-center align-items-center mt-5 pt-5' style={{position:'relative' , top:'-100px'}}>
          {
                  isAuthincated ? (<Link to="/dashboard" onClick = {handleNavC} className='text-decoration-none'><Avatar sx={{ width: 45, height: 45 }}> M </Avatar></Link>) : (
                        <div className="nav__auth__links d-flex justify-content-center flex-column align-items-center">
                             <Link to="/signin" className='actv__links' onClick = {handleNavC}>Sign in</Link>
                             <Link to="/signup" className='btn btn-dark mt-4 mt-lg-0 ms-lg-5' onClick = {handleNavC}>Sign up</Link>
                        </div>
                      )
                  }
          </div>
          <div className='d-flex flex-column' style={{position:'relative' , top:'-100px'}}>
               <a href="#" className='text-white text-decoration-none mb-2 mt-4 mt-lg-0' onClick = {handleNavC}>Explore</a>
               <a href="#" className='text-white text-decoration-none mt-4 mt-lg-0' onClick = {handleNavC}>Book</a>
          </div>
          
    </div>
  )
}

export default NavLinksMobile