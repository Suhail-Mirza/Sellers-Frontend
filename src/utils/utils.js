import io from 'socket.io-client'
export const overrideStyle ={
    display:"flex",
    margin:"0 auto",
    justifyContent:"center",
    alignItems:"center",
    height:"24px"
   }

export const socket = io('https://backend-ecommerce-api-2zqg.onrender.com')