"use client";
import React from 'react';
import ChatMessage from './ChatMessage'; 

interface Message {
  message: string;
  senderKey: string;
}

interface ChatContainerProps {
  messages: Message[];
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages }) => {
  return (
    <div className="flex flex-col w-full">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg.message} senderKey={msg.senderKey} />
      ))}
    </div>
  );
};

export default ChatContainer;
