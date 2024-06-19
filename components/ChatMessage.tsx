"use client";
import React from 'react';

interface ChatMessageProps {
  message: string;
  senderKey: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, senderKey }) => {
  const isSentByUser = senderKey === 'userKey';
  const messageStyle = isSentByUser
    ? { alignSelf: 'flex-start',width:"fit-content", backgroundColor: 'black', color: 'white', borderRadius: '16px 16px 4px 16px', padding: '8px 14px', marginBottom: '5px' }
    : { alignSelf: 'flex-end',width:"fit-content", backgroundColor: '#E0E0E0', color: 'black', borderRadius: '16px 16px 16px 4px', padding: '8px 14px', marginBottom: '5px' };

  return (
    <div style={messageStyle}>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
