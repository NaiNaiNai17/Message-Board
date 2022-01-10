import React from 'react'

function MessageForm(props) {


    return (
       
        <>
<form className="pa4 black-80" onSubmit={props.onSubmitHandle}>
  <div className="measure">
    <label for="name" className="f6 b db mb2" name="subject">Subject <span class="normal black-60">(Required)</span></label>
    <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="text-body" aria-describedby="name-desc"/>
    <small id="name-desc" className="f6 black-60 db mb2">Helper text for the form control.</small>
    </div>
 

           <label for="comment" className="f6 b db mb2">Body</label>
    <textarea id="comment" name="body-text" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
    <div className="ph3 mt4">
    <a className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib mid-gray" type="submit" href="#0" onChange={props.onSubmitHandle}>Post</a>
   </div>
</form>
</>
            
        
    )
}

export default MessageForm
