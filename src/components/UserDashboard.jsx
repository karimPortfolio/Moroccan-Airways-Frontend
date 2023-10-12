import React , {useContext, useEffect, useState} from 'react'
import { myAuthContext } from './appContext/AuthContext'
import { NavDashboard } from './dashboard/NavDashboard';
import Skeleton from '@mui/material/Skeleton';
import {flightContext} from './appContext/myAppContext';
import '../css/main.css'
import DashboardHome from './dashboard/DashboardHome';
import DashboardMenu from './dashboard/DashboardMenu';
import DashboardReser from './dashboard/DashboardReser';

export function UserDashboard() {

  const {loading} = useContext(flightContext);
  var userName = window.localStorage.getItem('user-name');
  var userEmail = window.localStorage.getItem('user-email');
  const {active} = useContext(myAuthContext);
  const {expireMsg} = useContext(myAuthContext);
  const {buttonExpire} = useContext(myAuthContext);


  return (
    <div>
        
        <NavDashboard />
        <div className="row w-100 m-0">
              <div className="col-2 col-lg-3 p-0">
                  <DashboardMenu />
              </div>
              <div className='col-10 col-lg-9 p-0'>
                  {
                    active ? (<DashboardReser />) : (<DashboardHome />)
                  }
              </div>
              <div className='col-12 d-flex justify-content-center align-items-center dashboardExpireModal'>
                    <button type="button" ref={buttonExpire} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                         Launch demo modal
                    </button>
                   <div className="modal fade" tabindex="-1" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Session Expire</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <p>Your login session is expired, try to login again.</p>
                            </div>
                            <div class="modal-footer">
                              <a href='/dashboard' className="btn btn-secondary" data-bs-dismiss="modal">Close</a>
                              <a href='/login' className="btn btn-primary">Login</a>
                            </div>
                          </div>
                        </div>
                   </div>
              </div>
        </div>
    </div>
  )
}
