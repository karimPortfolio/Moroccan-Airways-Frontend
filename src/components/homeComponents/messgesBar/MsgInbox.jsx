import React, { useContext, useEffect, useRef } from 'react'
import logo from '../../../images/myFlightLogo.png'
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import { myContactChat } from '../../appContext/ContactContext';
import UserMessages from './UserMessages';

export default function MsgInbox() {

  const {chatBoxOpen} = useContext(myContactChat);
  const {userMessage , setUserMessage} = useContext(myContactChat);
  const {handleChatOpen} = useContext(myContactChat);
  const {chatMessages} = useContext(myContactChat);
  const {loadingChat} = useContext(myContactChat);
  const {handleScroll} = useContext(myContactChat);
  const {handleUserMessage} = useContext(myContactChat);
  const input = useRef();

  var current_date;
  const date = new Date();
  const hour = date.getHours();
  if (hour > 9)
  {
      current_date = hour + ':' +date.getMinutes() + ' PM';
  }else{
      current_date = hour + ':' +date.getMinutes() + ' AM';
  }


  useEffect( () => {
      if (!loadingChat)
      {
        input.current.focus();
      }
  },[loadingChat])

  return (
    <div className={chatBoxOpen ? 'msg_inbox shadow d-flex justify-content-center align-items-center flex-column' : 'msg_inbox_close shadow'} >
        {
          loadingChat  ? (<CircularProgress style={{ color:'#ac0068' }} />) : (
              <div>
                    <div className="inbox_head d-flex justify-content-start p-2 px-3">
              <div>
                  <img src={logo} alt="" />
              </div>
              <div className='ms-2 d-flex justify-content-center align-items-center flex-column'>
                 <h5 className='text-white text-start m-0'>Morocco Airways</h5>
                 <div className='d-flex justify-content-center align-items-center w-100'>
                     <p className='text-green onlineIcon text-start mb-0'><FiberManualRecordIcon /></p>
                     <p className='text-white text-start ms-1 mb-0 me-auto'>online</p>
                 </div>
              </div>
              <div className='ms-auto'>
                     <span className='text-white' onClick={handleChatOpen}><CloseIcon /></span>
              </div>
          </div>
          <div className="inbox_body px-2 py-3" ref={handleScroll}>
              <div className=''>
                   <span className='p-1 px-2'>Today</span>
              </div>
              
              <div className='mt-2'>
                   <div className='d-flex'>
                        <div className='chatLogo'>
                             <img src={logo} alt="" />
                        </div>
                        <div className='w-75 chatBot_texts ms-2'> 
                            <p className='text-start m-0'>Hi there! I am the Moroccoo Airway support chatbot. I will do my best to assist you today.</p>
                            <div className='d-flex justify-content-end w-100 mb-1'>
                                <span>{current_date}</span>
                            </div>
                        </div>
                   </div>
                   <div className="all_remain_chats" ref={chatMessages}>
                         <UserMessages />
                   </div>
              </div>
          </div>
          <div className="inbox_footer mt-auto mb-0 p-2">
                <div className='my-2 d-flex justify-content-start align-items-center'>
                      <input type="text" ref={input} value={userMessage} placeholder='Ask something...' onChange={e=>setUserMessage(e.target.value)} />
                      <button className="sendMsg btn btn-danger shadow-sm d-flex justify-content-center align-items-center" onClick={handleUserMessage}> <SendIcon /> </button>
                </div>
                <div>
                      <p className='m-0'>Powered by <a href="https://karim-portfolio-web.surge.sh/" target="_blank">Karim Portfolio</a></p>
                </div>
          </div>
              </div>
            )
        }
    </div>
  )
}
