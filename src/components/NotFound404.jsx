import React from 'react'
import logo from '../images/myFlightLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function NotFound404() {
  return (
    <div className='vh-100 d-flex  justify-content-center align-items-center flex-column' style={{ background:"#feebf3" }}>
          <NavLink to='/'><img src={logo} alt="" style={{ width:'100px' , height:'70px' }} /></NavLink>
          <div className="mt-4">
               <h1>404 | Not Found</h1>
               <NavLink to="/" style={{ textDecoration:'none' , color:'#c30075' }} >Back home</NavLink>
          </div>
    </div>
  )
}

export default NotFound404