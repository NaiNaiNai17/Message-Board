import React from 'react'


const LoginForm = (props) => {

    return (

  <form className="FormContainer" onSubmit={props.onSubmitHandle}> 
    <label htmlFor="username">Username</label>
    <input type="text" id="username" value={props.userName} onChange={props.onChangeUserName}/>
    <br/>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" value={props.email} onChange={props.onChangeEmail} style={props.redBorder ? {border: "solid 1px red"} : null}/>
    <label htmlFor="password">Password</label>
    <input  type="password"/>
    <button type="submit">Login</button>
   
</form>
            
    
    )
}

export default LoginForm

