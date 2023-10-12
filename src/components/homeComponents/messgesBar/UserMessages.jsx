import React, { useContext } from 'react'
import { myContactChat } from '../../appContext/ContactContext'
import logo from '../../../images/myFlightLogo.png'
import BeatLoader from "react-spinners/BeatLoader";

export default function UserMessages() {

    const {messages} = useContext(myContactChat); 
    const {writingLoad} = useContext(myContactChat);


    var current_date;
    const date = new Date();
    const hour = date.getHours();
    if (hour > 9)
    {
        current_date = hour + ':' +date.getMinutes() + ' PM';
    }else{
        current_date = hour + ':' +date.getMinutes() + ' AM';
    }

  return (
    <div>
         {
                messages.map( msg => {
                    return(
                        <div key={msg.id} className="">
                             <div className='d-flex justify-content-end my-3'>
                                  <div className='w-75 chatUser_texts ms-2'> 
                                    <p className='text-start m-0'>{msg.msg}</p>
                                    <div className='d-flex justify-content-end w-100 mb-1'>
                                        <span>{current_date}</span>
                                    </div>
                                  </div>
                             </div>
                             <div className='d-flex mb-3'>
                                 <div className='chatLogo'>
                                      <img src={logo} alt="" />
                                 </div>
                                 {
                                   
                                   msg.id == messages.length ?
                                   writingLoad ? (
                                         <div className="ms-2 d-flex justify-content-center align-items-center">
                                                <BeatLoader
                                                  color={"#ac0068"}
                                                  loading={writingLoad}
                                                  size={9}
                                                  aria-label="Loading Spinner"
                                                  data-testid="loader"
                                                  
                                                />
                                         </div>
                                    ) : (
                                        <div className='w-75 chatBot_texts ms-2'> 
                                            <p className='text-start m-0'>Your request has been send to the support team, we will answer you soon, thanks.</p>
                                            <div className='d-flex justify-content-end w-100 mb-1'>
                                                <span>{current_date}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='w-75 chatBot_texts ms-2'> 
                                            <p className='text-start m-0'>Your request has been send to the support team, we will answer you soon, thanks.</p>
                                            <div className='d-flex justify-content-end w-100 mb-1'>
                                                <span>{current_date}</span>
                                            </div>
                                        </div>
                                    )
                                 }
                            </div>
                        </div>
                    )
                })
            //  )
         }
    </div>
  )
}
