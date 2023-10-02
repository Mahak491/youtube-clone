import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generate, makeRandomMessage } from '../utils/helper';



const LiveChat = () => {
  const[liveMessgae,setLiveMessage] = useState("")
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
    <>
    <div className='w-[400px] h-[510px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      <div>
      {chatMessages.map((c,i) => <ChatMessage key={i} 
       name={c.name}
       message={c.message}/>)}
       </div>
       
    </div>
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(
        addMessage({
          name: "Mahak shree",
          message : liveMessgae,
        })
      );
      setLiveMessage("")
    }}>
       <input className='w-[340px] ml-2 p-1 px-2 border border-black bg-slate-100 rounded-lg ' type='text'
        value={liveMessgae} onChange={(e) => {
        setLiveMessage(e.target.value)
       }} /> 
       <button className='p-3'>Send</button>
    </form>
    </>
  )
}

export default LiveChat;
