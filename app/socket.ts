"use client";

import { io } from "socket.io-client";


const URl = "http://localhost:3000";
export const socket = io(URl, { autoConnect: false });