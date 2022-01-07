import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from '../../util/axiosInstance'
import LoginForm from './LoginForm'


const Landing = () => {
    const navigate = useNavigate()
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [redBorder,setRedBorder] = useState(false)

    const onChangeUsername = (e) =>{
        setUsername(e.target.value)
    }

    const onChangeEmail = (e) =>{
        setRedBorder(e.target.value.includes('@') ? false : true)
        setEmail(e.target.value)
    }

    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    const onSubmitHandle = async (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)

        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password:formData.get('password')
        }

        try {
            const response = await axios.post('/users/login', data)
            console.log(response)

        } catch (error) {
            
        }
    }
    return (
        <div>
             <h1>Landing</h1>
            <LoginForm username={username} onChangeUserName={onChangeUsername}
             email={email} onChangeEmail={onChangeEmail} redBorder={redBorder}
             password={password} onChangePassword={onChangePassword}
             onSubmitHandle={onSubmitHandle}
            /> 
            
            
        </div>
    )
}

export default Landing
