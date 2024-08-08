import React, { use } from 'react';
import { useEffect, useState } from 'react';
import firebase from '../firebaseConfig'
import {useAuthState} from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import ChatRoom from "./components/chatroom";
import SignIn from "./components/Signin";
import { socket } from "./socket";


const auth = getAuth();
const [user] = useAuthState(auth);

const Dashboard = () => {

  const user = useAuthState(auth);

  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("polling");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("none");
    }

    socket.on("connect", onConnect);
    socket.on("disconneect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };

  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <p>Transport: {transport}</p>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}
export default Dashboard;

