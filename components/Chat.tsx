"use client";
import React from 'react';
import ChatContainer from './ChatContainer';
import ImageUpload from './ImageUploader';
import EmojiList from './EmojiList';

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
    <div className='flex flex-col w-full p-5'>
      <div>
        <p className='text-[16px] text-center text-[#828282]'>Nov 30, 2023, 9:41 AM</p>
      </div>
      <div className='flex flex-col flex-grow'>
        <ChatContainer messages={messages} />
      </div>
      <div className='relative flex items-center w-full h-[40px]'>
        <input type="text" dir='ltr' placeholder='Enter your message' className='text-[#828282] text-[16px] w-full px-4 py-2 h-[40px] rounded-lg border-[1.5px] border-[#E0E0E0]'/>
        <div className='flex justify-center items-center gap-3 absolute right-4 top-2'>
          <ImageUpload />
          <EmojiList />
          <img src="/images/voice.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
