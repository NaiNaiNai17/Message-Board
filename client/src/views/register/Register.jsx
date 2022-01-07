import React from 'react'
const Register = (props) => {
    return (
        <div>
               <>
  <form className="measure center" onSubmit={props.onSubmitHandle}> 
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="f4 fw6 ph0 mh0">Register</legend>
    <label className="db fw6 lh-copy f6" htmlFor="firstname">Firstname</label>
    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="firstname" id="firstname" value={props.firstname} onChange={props.onChangeFirstname} /> 

    <label className="db fw6 lh-copy f6" htmlFor="lastname">Lastname</label>
    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="lastname" id="lastname" value={props.lastname} onChange={props.onChangeLastname} /> 


    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" value={props.email} onChange={props.onChangeEmail} style={props.redBorder ? {border: "solid 1px red"} : null}/> 
   


    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" id="password"/>
    
    <>
      <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
   </>
    </fieldset>
   
</form>
       </>     
            
        </div>
    )
}

export default Register
