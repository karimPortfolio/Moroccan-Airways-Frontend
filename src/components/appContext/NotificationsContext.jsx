import axios from 'axios';
import React, { createContext , useEffect , useState } from 'react'

export const NotificationsCont = createContext();

export default function NotificationsContext({children}) {


    //notifications manage

    const [notifications , setNotifications] = useState([]);
    const [numNotifications , setNumNotifications] = useState(0);

    useEffect( () =>{
        const user_id = window.localStorage.getItem("user-id");
        if (user_id)
        {
            const url = `https://moroccan-flights.000webhostapp.com/api/notifications/${user_id}`;
            const url2 = `https://moroccan-flights.000webhostapp.com/api/notifications/${user_id}/count`;
            axios.get(url)
              .then(res => {
                   if (res.status === 200)
                   {
                       setNotifications(res.data);
                   }
              })
            
            axios.get(url2)
              .then(res => {
                if (res.status === 200)
                {
                     setNumNotifications(res.data)
                }
              })
            
        }
    },[])

    //seen notifications
    const changeSeenStatus = () => {
        const user_id = window.localStorage.getItem("user-id");
        if (user_id)
        {
            const url = `https://moroccan-flights.000webhostapp.com/api/notifications/${user_id}/change`;
            axios.get(url)
        }
    }


  return (
      <NotificationsCont.Provider value={{ notifications , numNotifications ,changeSeenStatus }}>
          {children}
      </NotificationsCont.Provider>
  )
}


