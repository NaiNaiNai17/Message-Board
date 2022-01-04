import React, {useState} from 'react'
import Form from './Form'

const Landing = () => {
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

    const onSubmitHandle = (e) =>{
        e.preventDefault()
        console.log(username,email,password)
    }
    return (
        <div>
            <h1>Landing</h1>
            <Form username={username} onChangeUserName={onChangeUsername}
             email={email} onChangeEmail={onChangeEmail} redBorder={redBorder}
             password={password} onChangePassword={onChangePassword}
             onSubmitHandle={onSubmitHandle}
            />
            
        </div>
    )
}

export default Landing
