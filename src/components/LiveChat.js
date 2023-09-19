import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generate, makeRandomMessage } from '../utils/helper';



const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages)

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(addMessage({
        name:generate(),
        message:makeRandomMessage(25) ,
      }))
    },2000);

    return () => clearInterval(i);
  },[]);

  return (
    <div className='w-[400px] h-[510px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {chatMessages.map((c,i) => <ChatMessage key={i} 
       name={c.name}
       message={c.message}/>)}
    </div>
  )
}

export default LiveChat;
