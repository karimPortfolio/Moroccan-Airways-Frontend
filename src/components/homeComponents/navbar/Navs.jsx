import React, { useContext } from 'react'
import NavSearch from './navSearch'
import {Link} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import {myAuthContext} from '../../appContext/AuthContext';

function Navs() {

  const {isAuthincated} = useContext(myAuthContext);
  const userName = window.localStorage.getItem('user-name');
  var firstUserNameLetter = ''
  if (isAuthincated)
  {
      firstUserNameLetter = userName[0];
  }


  return (

    <div className='my-2'>

        <div className='d-flex justify-content-center align-items-center me-auto'>
            <div>
                  <NavSearch />
            </div>

            <div className='ms-5 ps-4 d-flex justify-content-center align-items-center'>
                  {
                     isAuthincated ? (<Link to="/dashboard" className='text-decoration-none'><Avatar sx={{ width: 45, height: 45 }}> {userName !== '' ? firstUserNameLetter : 'M' } </Avatar></Link>) : (
                        <div className="nav__auth__links">
                             <Link to="/signin" className='actv__links'>Sign in</Link>
                             <Link to="/signup" className='btn btn-danger ms-5'>Sign up</Link>
                        </div>
                      )
                  }
            </div>
        </div>
    </div>

  )
}

export default Navs