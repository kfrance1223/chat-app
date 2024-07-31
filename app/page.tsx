import React from 'react';
import firebase from '../firebaseConfig'
import {useAuthState} from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import ChatRoom from "./components/chatroom";
import SignIn from "./components/Signin";
import { useCollectionData } from "react-firebase-hooks/firestore";




const auth = getAuth();
const [user] = useAuthState(auth);


const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}
export default Dashboard;

