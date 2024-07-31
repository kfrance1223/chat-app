import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '@/firebaseConfig'
import chatMessage from './chatMessage'

interface props {
    message: {
        text: string,
        uid: string
    }
}

const ChatRoom = () => {  

    const messagesRef = firestore.collectiion('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});


  return (
    <>
    <div>
        (messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>))
    </div>
    </>
  )
}

export default ChatRoom