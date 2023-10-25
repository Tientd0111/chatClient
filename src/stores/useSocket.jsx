import create from 'zustand';
import { io } from "socket.io-client";
import { environmentConfig } from '@/apis/index.jsx'


const token = localStorage.getItem("key")

// const socket = io('http://192.168.0.78:4000',{query:{token: token}});

const socket = io(environmentConfig.URI_SOCKET,{query:{token: token}});

socket.connect()

export const useSocket = create(set => ({
    socket: socket
}))