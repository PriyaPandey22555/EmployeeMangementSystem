import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)
        setEmail("")
        setPassword("")

    }
  return (
    <div className='flex  h-screen w-screen items-center justify-center'>
         <div className='border-2  rounded-xl  border-emerald-600  p-25'>
                   <form onSubmit={(e)=>{
                        submitHandler(e)
                   }}
                   className='flex  flex-col items-center justify-center'>
                       <input  
                       value={email}
                       onChange={(e)=>{
                          setEmail(e.target.value)
                       }}
                       required 
                       className=' border-2 border-emerald-600  outline-none  bg-transparent text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' type='email' placeholder='Enter your email'
                       />
                       <input  
                       value={password} 
                       onChange={(e)=>{
                        setPassword(e.target.value)
                       }}
                       required 
                       className=' border-2 border-emerald-600  outline-none  bg-transparent text-xl py-3 px-5 rounded-full  mt-5 placeholder:text-gray-400 ' type='password' placeholder='Enter your password'/>
                       <button className=' mt-5 border-none bg-emerald-600  outline-none   text-xl py-3 px-5 rounded-full placeholder:text-white '>Log in</button>
                   </form>
         </div>
    </div>
  )
}

export default Login