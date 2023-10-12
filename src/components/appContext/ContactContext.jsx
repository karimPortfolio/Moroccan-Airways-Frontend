import React, { createContext, useRef, useState , useEffect } from 'react'


export const myContactChat = createContext();

export default function ContactContext(props) {
    const [messages , setMessages] = useState([])
    const [chatBoxOpen , setChatBoxOpen] = useState(false);
    const [userMessage , setUserMessage] = useState('');
    const [loadingChat , setLoadingChat] = useState(false);
    const chatMessages = useRef();
    const handleScroll = useRef();


    //BOT & user message loading
    const [writingLoad , setWritingLoad] = useState(false);
    const writeLoadingMsg = () => {
         setWritingLoad(true);
         setTimeout( () => {
              setWritingLoad(false);
         },3500)
    }

    const handleChatOpen = () => {
            setChatBoxOpen(!chatBoxOpen)
            setLoadingChat(true);
            setTimeout( () => {
                setLoadingChat(false);
            },2500)
    }

    const handleUserMessage = () => {
         if (userMessage != "")
         {
            const len = messages.length;
            const newMessage = {
                id:len + 1,
                msg:userMessage
            }
            const newArr = [...messages , newMessage];
            setMessages(newArr);
            setUserMessage('');
            handleScroll.current.scrollTop = handleScroll.current.scrollHeight;
            writeLoadingMsg();
         }    
    }

  return (
    <myContactChat.Provider value={{ chatBoxOpen , handleChatOpen , userMessage , setUserMessage ,chatMessages,
        handleUserMessage , loadingChat , messages , handleScroll,writingLoad,writeLoadingMsg}}>
          
        {props.children}
    </myContactChat.Provider>
  )
}
