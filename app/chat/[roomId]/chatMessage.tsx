
import React from 'react'

interface Message {
  id: string;
  text: string;
  uid: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

interface chatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<chatMessageProps> =  ({ message }) => {
    const { text, uid, createdAt } = message;

  return (
    <>
    <div>{ message.text }</div>
    <span>{new Date(createdAt?.seconds * 1000).toLocaleString()}</span>
    </>
  )
}

export default ChatMessage;