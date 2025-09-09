import io from 'socket.io-client'
export const overrideStyle ={
    display:"flex",
    margin:"0 auto",
    justifyContent:"center",
    alignItems:"center",
    height:"24px"
   }

export const socket = io('http://localhost:5000')