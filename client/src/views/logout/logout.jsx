import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from '../../util/axiosInstance'


export default function Logout()  {
    
const navigate= useNavigate()

useEffect(() => {
   async function logout(){
   const response = await axios.get('http://localhost:3001/users/logout')
    console.log(response)
    navigate('/') 
} 
   
  setTimeout(()=>{
      logout()  
  },1000)
}, [])
    


   
    return (
        <div>
            <h1>You are being logged out</h1>
            
        </div>
    )
}


