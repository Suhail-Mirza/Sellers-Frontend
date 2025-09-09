import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaFacebook, FaGoogle} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { admin_login,messageClear } from '../../store/Reducers/authReducer'
import {PropagateLoader} from "react-spinners"
import toast from 'react-hot-toast'

const AdminLogin = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {loader,errorMessage,successMessage}=useSelector(state=>state.auth)

  const [data, setData] = useState({
    name:"",
    password:"",
    email:""
   })
  
   const inputHandle = (e,key)=>{
     setData({
      ...data,
      [key]:e.target.value
     })
   }
  
   const submit=(e)=>{
    e.preventDefault()
    dispatch(admin_login(data))
   }

   const overrideStyle ={
    display:"flex",
    margin:"0 auto",
    justifyContent:"center",
    alignItems:"center",
    height:"24px"
   }


   useEffect(() => {
    if(errorMessage){
      toast.error(errorMessage)
      dispatch(messageClear())
    }
    if(successMessage){
      toast.success(successMessage)
      dispatch(messageClear())
      navigate("/")
    }
   }, [errorMessage,successMessage])
   



  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
        <div className='w-[350px] text-[#ffffff] p-2'>
            <div className='bg-[#6f68d1] p-4 rounded-md'>
                <div className='h-[70px] flex justify-center items-center'>
                    <div className='w-[180px] h-[50px] m'>
                        <img className='w-full h-full' src="/images/logo.png" alt="Seller Image" />
                    </div>
                </div>
                <form onSubmit={submit}>
                  <div className='flex flex-col w-full gap-1 mb-3'>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>inputHandle(e,"email")} value={data.email} className='bg-[#cdcae9] text-black outline-none px-3 py-2 border border-slate-700 rounded-b-lg' type="text" placeholder='Email' name="email" id="email" required/>
                  </div>  
                  <div className='flex flex-col w-full gap-1 mb-3'>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>inputHandle(e,"password")} value={data.password} className='bg-[#cdcae9] text-black outline-none px-3 py-2 border border-slate-700 rounded-b-lg' type="password" placeholder='Password' name="password" id="password" required/>
                  </div>
                  <button disabled={loader} onClick={submit} className='!bg-slate-800 w-full hover:shadow-blue-300/hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 !important'> {
                          loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle}/>:"Login"}
                  </button>
                  <div className='flex items-center mb-3 gap-3 justify-center'>
                    <p>Are you a Seller ?<Link className="!text-gray-300 hover:text-lg" to="/login"> Login as Seller</Link></p>
                  </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin