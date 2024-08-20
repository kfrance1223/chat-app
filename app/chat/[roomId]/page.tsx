
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '@/firebaseConfig'
import ChatMessage from './chatMessage'
import { collection, query, orderBy, limit } from 'firebase/firestore'
import firebase from 'firebase/compat/app';

interface Message {
  id?: string;
  text: string;
  createdAt: firebase.firestore.Timestamp;
}


const ChatRoom = () => {  

    const messagesRef = collection(firestore, 'messages');
    const messageQuery = query(messagesRef, orderBy('createdAt'), limit(25));

    const [messages] = useCollectionData<Message>(messageQuery, { idField: 'id' });


  return (
    <>
    <h1>ChatRoom</h1>
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>
    </>
  )
}

export default ChatRoom;