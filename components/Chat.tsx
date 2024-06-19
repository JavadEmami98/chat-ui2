"use client";
import React from 'react';
import ChatContainer from './ChatContainer';

const Chat: React.FC = () => {
 
  const messages = [
    { message: "This is the first message", senderKey: "userKey" },
    { message: "Oh?", senderKey: "otherUserKey" },
    { message: "This is the first message", senderKey: "userKey" },
    { message: "Oh?", senderKey: "otherUserKey" },
    { message: "This is the first message", senderKey: "userKey" },
    { message: "Oh?", senderKey: "otherUserKey" },
    { message: "This is the first message", senderKey: "userKey" },
    { message: "Oh?", senderKey: "otherUserKey" },
  ];

  return (
    <div className='flex flex-col w-full p-5 '>
      <div>
        <p className='text-[16px] mb-3 text-center text-[#828282]'>Nov 30, 2023, 9:41 AM</p>
      </div>
      <div className='flex flex-col flex-grow'>
        <ChatContainer messages={messages} />
      </div>
      
    </div>
  );
};

export default Chat;
