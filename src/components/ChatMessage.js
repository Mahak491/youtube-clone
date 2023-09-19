import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center p-2 shadow-sm'>
      <img className="h-10" alt='user' src='https://tse2.mm.bing.net/th?id=OIP._BXCcqxwmsduYNCJj2XDtgHaHa&pid=Api&P=0&h=180'/>
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
