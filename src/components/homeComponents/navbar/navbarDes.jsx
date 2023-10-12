import React from 'react'
import Navs from './Navs'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../css/main.css';
import logo from '../../../images/myFlightLogo.png';
import { Link } from 'react-router-dom';

function NavbarDesk() {

  return (

    <nav className='d-none d-lg-block'>

        <div className='contain d-flex justify-content-center align-items-center mx-5 px-4'>
            <div className='me-auto d-flex justify-content-center align-items-center'>
                <Link to="/" className='app__logo mb-1 ms-3'>
                    <img src={logo} alt="" />
                </Link>
                <div className='ms-5 nav__links ps-1 d-flex justify-content-center align-items-center'>
                    <a href="#" className='me-4 actv__links' >Explore</a>
                    <a href="#" className='ms-4 actv__links' >Book</a>
                </div>
            </div>

            <Navs />
            
        </div>

    </nav>

  )
}

export default NavbarDesk