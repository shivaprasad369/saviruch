import React from 'react'
import './Contact.css'
export default function Contact() {
    const handleSubmit=(e)=>{
        
        alert("Thank you for contacting")
        
    }
  return (
    <div className='py-[2rem] container' id='contact'>
      <div className='box'>
        <h1>Contact Us</h1>
       <form action="" className='form ' onSubmit={handleSubmit} >
         <label>Name</label>
         <input type="text" name="name" required />
         <label>Email</label>
         <input type="email" name="email" required/>
         <label>Message</label>
         <textarea name="message" rows={5} required/>
         <button type="submit" >Submit</button>
       </form>
      </div>
    </div>
  )
}
