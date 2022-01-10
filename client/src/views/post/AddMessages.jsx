import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'

import axios from '../../util/axiosInstance'
import FormWrapper from '../../wrapper/Wrapper'
import MessageForm from '../post/MessageForm'

const AddMessages = () => {
const [messages, addMessages] = useState('')
const navigate = useNavigate()
const onSubmitHandle = async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
        subject:formData.get('subject'),
        text: formData.get('body-text'),
        createdOn: formData.get(Date.now())
    }
    try {
        const response = await axios.get('http://localhost:3001/messages/post')
        console.log(response)
        navigate('/')
    } catch (error) {
        
    }
}
    return (
    <FormWrapper  onSubmitHandle={onSubmitHandle}/>
    )
}

export default AddMessages
