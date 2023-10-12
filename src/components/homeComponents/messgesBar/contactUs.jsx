import React, { useContext } from 'react'
import MessageIcon from '@mui/icons-material/Message';
import MsgInbox from './MsgInbox';
import CloseIcon from '@mui/icons-material/Close';
import { myContactChat } from '../../appContext/ContactContext';

export default function ContactUs() {

  const {chatBoxOpen } = useContext(myContactChat);
  const {handleChatOpen } = useContext(myContactChat);

  return (
    <div>
         <div className='d-flex justify-content-end w-100 pe-4'>
             <MsgInbox />
         </div>
         <div className='msg_bar'>
             <div className='shadow' onClick={handleChatOpen}>
                  {
                     chatBoxOpen ? (<CloseIcon className='closeMsgBar' />) : (<MessageIcon/>)
                  }
             </div>
         </div>
    </div>
  )
}
