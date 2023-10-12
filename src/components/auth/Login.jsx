import React from 'react'
import Form from './Form'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

import img from '../../images/loginPage/loginBg.png';
import logo  from "../../images/myFlightLogo.png"
import { Link } from 'react-router-dom';

// library.add(faUser);

export default function Login() {
  return (
    <div id='container'>
      <section id='sec1'>
        
        <Link to="/"><img className='carte mb-3' src={logo} width='80' alt="" /></Link>
        <h1 className='m-0 mb-2'>Welcome Back</h1><br />    

         <Form/>
      
      </section>
      
      <section id='sec2'>
      <img className='client' src={img} alt="" />
      </section>
    </div>
    
  )
}
