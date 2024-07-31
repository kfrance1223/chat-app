import React from 'react'
import ChatRoom from './chatroom'


const chatMessage = () => {
    const {text, uid} = props.message;

  return (
    <div>{ text }</div>
  )
}

export default chatMessage