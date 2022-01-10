import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../util/axiosInstance'
import LoginForm from './LoginForm'


const Landing = () => {
    const navigate = useNavigate()
    

    const [redBorder,setRedBorder] = useState(false)

    const onSubmitHandle = async (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)

        const data = {
            email: formData.get('email-address'),
            password:formData.get('password')
        }
        

        try {
            const response = await axios.post('http://localhost:3001/users/login', data)
            console.log(response)
            
           
            navigate('/messageboard')

        } catch (error) {
            setRedBorder(true)
        }
    }
    return (
        <div>
             <h1>Landing</h1>
            <LoginForm 
             redBorder={redBorder}
             onSubmitHandle={onSubmitHandle}
            /> 
            
            
        </div>
    )
}

export default Landing
