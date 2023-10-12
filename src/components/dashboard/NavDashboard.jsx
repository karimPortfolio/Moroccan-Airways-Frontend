import React , {useContext} from 'react'
import {Link} from 'react-router-dom'
import Logo from "../../images/myFlightLogo.png"
import { NavAvatar } from './navComp/NavAvatar'
import { flightContext } from '../appContext/myAppContext'
import Skeleton from '@mui/material/Skeleton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notifications from './Notifications'
import { NotificationsCont } from '../appContext/NotificationsContext'

export const NavDashboard = () => {
 
  const {loading} = useContext(flightContext);
  const {numNotifications} = useContext(NotificationsCont);
  const {changeSeenStatus} = useContext(NotificationsCont);
 
  return (
    <div className='dashboard-header p-2 bg-light'>
         <div className='nav d-flex justify-content-center align-items-center'>
               <a href='/' className='ms-1 ms-sm-5 me-auto'>
                    {loading ? (<Skeleton variant="circular" width={50} height={50} />) : (<img src={Logo} alt=""  />)}
               </a>
               <div className="d-flex justify-content-center align-items-center nav-content me-sm-5">
                     <div class="dropdown me-sm-4" onClick = {changeSeenStatus} style={{ cursor:"pointer" }}>
                          {loading ? (<Skeleton variant="circular" width={40} height={40} style={{ marginRight:"10px" }} />) : (
                           <li className='d-flex justify-content-center align-items-center firstLi' data-bs-toggle="dropdown" aria-expanded="false"><NotificationsIcon />
                              {numNotifications === 0 ? ("") : (
                                     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {numNotifications}
                                     </span>
                                
                              )}
                           </li>
                          )}
                          <Notifications />
                      </div>
                     <li><NavAvatar /></li>
              </div>
         </div>
    </div>
  )
}
