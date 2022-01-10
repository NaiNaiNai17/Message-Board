import React from 'react'
import FormWrapper from '../../wrapper/Wrapper'
const RegisterForm = (props) => {
  
    return (
        
              
               <FormWrapper>
  <form className="measure center" onSubmit={props.onSubmitHandle}> 
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="f4 fw6 ph0 mh0">Register</legend>
    <div className="mt4">
    <label className="db fw6 lh-copy f6" htmlFor="firstname">Firstname</label>
    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="firstname" id="firstname" value={props.firstname} onChange={props.onChangeFirstname} /> 
      </div>


    <label className="db fw6 lh-copy f6" htmlFor="lastname">Lastname</label>
    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="lastname" id="lastname" /> 
    
    <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="username" id="username" /> 


    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email-address" /> 
   


    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
    
    <div className="mt2">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" type="submit" />
   </div>
    </fieldset>
   
</form>
          
       </FormWrapper>
            
        
    )
}

export default RegisterForm
