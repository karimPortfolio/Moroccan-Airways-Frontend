import React, { useContext } from 'react'
import { NotificationsCont } from '../appContext/NotificationsContext'
import ReactTimeAgo from "react-time-ago"

export default function Notifications() {

    const {notifications} = useContext(NotificationsCont);

  return (
    <div>
        <ul class="dropdown-menu shadow dropdown-menu-start notification-dropdown mt-3" >
            <li className='m-3'>
               <h4>Notifications</h4>
            </li>
            {
                notifications.length > 0 ? (
                    notifications.sort((a,b) => b.id - a.id).map(notify => {
                        return(
                             <div key={notify.id}>
                                 {
                                    notify.isSeen === "false" ? (
                                        <li className='m-2'>
                                            <a className="dropdown-item bg-light py-3" href="#">
                                                <div className='d-flex justify-content-between'>
                                                     <div>
                                                         <p className="notification-title mb-1">{notify.title}</p>
                                                         <p className="notification-content m-0">{notify.content}</p>
                                                     </div>
                                                     <span class="badge text-bg-danger d-flex justify-content-center align-items-center">NEW</span>
                                                </div>
                                                <div className="d-flex justify-content-start notification-timer">
                                                    {
                                                        notify.updated_at !== null ? (<p> <ReactTimeAgo date={notify.updated_at} locale='en-US' /> </p>) : notify.created_at !== null ? (
                                                            <p> <ReactTimeAgo date={notify.created_at} locale='en-US' /> </p>
                                                        ) : ("")
                                                    }
                                                </div>
                                            </a>
                                        </li>
                                     ) : (
                                        <li className='m-2'>
                                            <a class="dropdown-item" href="#">
                                                <div>
                                                    <p className="notification-title mb-1">{notify.title}</p>
                                                    <p className="notification-content m-0">{notify.content}</p>
                                                </div>
                                                <div className="d-flex notification-timer justify-content-start">
                                                    <p> <ReactTimeAgo date={notify.updated_at} locale='en-US' /> </p>
                                                </div>
                                            </a>
                                        </li> 
                                     )
                                 }
                                 
                             </div>

                        )
                    })
                ) : (
                    <h5 className='py-5 text-center'>You have no notifications</h5>
                )
            }
        </ul>
    </div>
  )
}
