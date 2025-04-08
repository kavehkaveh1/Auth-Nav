import { useState } from "react"
import { useAuth } from "./auth"
import { replace, useNavigate ,useLocation } from "react-router-dom"

export const Login = () => {
    const[user,setUser]=useState()
    const auth=useAuth()
    const navigate=useNavigate()
    const location= useLocation()
    const redirectPath=location.state?.path || '/'
    const handleLogin=()=>{
        auth.logIn(user)
        navigate(redirectPath , {replace:true})
    }
  return (
    <div><br/>
        <label>
            username:{' '}
            <input type="text" onChange={(e)=>setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>login</button>
    </div>
  )
}
