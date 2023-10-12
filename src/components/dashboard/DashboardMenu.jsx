import React , {useContext, useState} from 'react'
import { flightContext } from '../appContext/myAppContext';
import Skeleton from '@mui/material/Skeleton';
import {myAuthContext} from '../appContext/AuthContext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import Tooltip from '@mui/material/Tooltip';

export default function DashboardMenu() {

  const {loading} = useContext(flightContext);
  const {active} = useContext(myAuthContext);
  const {handleChangeActivity} = useContext(myAuthContext);

  return (
    <div className='w-100 dashboard-access-menu pt-5'>
        {
          loading ? (<Skeleton variant="rectangular" className='mx-4 mt-4' height={35} />) : (
            <Tooltip title="Dashboard" placement="right">
                <div className={active ? 'd-flex py-3 justify-content-center align-items-center w-100' : 'd-flex py-3 justify-content-center align-items-center w-100 active'} onClick={ () =>handleChangeActivity(false)}>
                  <h5 className='d-none d-lg-block text-start my-0 me-3'>Dashboard</h5>
                  <span className="d-flex icons d-lg-none">
                         <DashboardIcon />
                  </span>
                </div>
            </Tooltip>
           )
        }
        {
          loading ? (<Skeleton variant="rectangular" className='mx-4 mt-4' height={35} />) : (
            <Tooltip title="Booking" placement="right">
                  <div className={active ? 'd-flex py-3 justify-content-center align-items-center w-100 active mt-4' : 'd-flex py-3 justify-content-center align-items-center w-100 mt-4'} onClick={() => handleChangeActivity(true)}>
                      <h5 className='d-none d-lg-block text-start my-0'>Booking</h5>
                      <span className="d-flex icons d-lg-none">
                              <ListIcon />
                      </span>
                  </div>
            </Tooltip>
          )
        }
  
    </div>
  )
}
