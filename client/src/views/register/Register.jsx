import axios from "../../util/axiosInstance"
import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import RegisterForm from './RegisterForm'

import FormWrapper from '../../wrapper/Wrapper'



const Register = () => {

    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    

    const onSubmitHandle = async (e) =>{
        e.preventDefault()
        console.log('Submit the form')
        const formData = new FormData(e.target)

        const data = {
            firstname:formData.get('firstname'),
            lastname:formData.get('lastname'),
            username:formData.get('username'),
            email:formData.get('email'),
            password:formData.get('password')
        }
        
        try {
            const response = await axios.post('http://localhost:3001/users/register', data)

            console.log(response)
            navigate('/')

        } catch (error) {
            setIsError(true)
            setErrorMessage(error.message)
            
        }
    }

    return (
        <>
            {errorMessage ? <p>{errorMessage}</p> : null}
            <FormWrapper> <h3>Sign Up</h3>
                <RegisterForm
                onSubmitHandle={onSubmitHandle}
                />
            </FormWrapper>
        </>
    )
}

export default Register
