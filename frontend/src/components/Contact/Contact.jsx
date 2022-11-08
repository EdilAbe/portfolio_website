import './Contact.css'
import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0dwtdha" , 'template_ap87w5m', form.current, 'SFo4Z1i1RNCgl9gUN')
    e.target.reset()
        };
  return (
<section id = "contact">  
<h5> Get in Touch</h5>
<h2> Contact Me</h2>
<div className = "container contact_container">
  <div className = "contact_options">
<article className = "contact_option">
  <MdOutlineEmail className = "contact_option_icon" />
  <h4>Email</h4>
  <h5>edilawitatsehay@gmail.com</h5>
  <a href ="mailto:edilawitabebaw@gmail.com"  target= "_blank"> Send a message</a>
</article>
<article className = "contact_option">
  <FaTelegramPlane  className = "contact_option_icon"  />
  <h4>Telegram</h4>
  <h5>Edil</h5>
  <a href ="https://telegram.org/edil" target= "_blank"> Send a message</a>
</article>
<article className = "contact_option">
  <BsWhatsapp   className = "contact_option_icon" />
  <h4>WhatsApp</h4>
  <h5>+12404764015</h5>
  <a href ="https://api.whatsapp.com/send?phone+12404764015" target= "_blank">Send a message</a>
</article>
  </div>
<form ref = {form} onSubmit = {sendEmail}>
  <input type= "text" name ="name" placeholder= "Your Full Name " required />
    <input type= "email" name= "email" placeholder = "Your Email" required />
<textarea name = "message" rows = "7" placeholder = "Your Message" required ></textarea>
<button type ="submit" className = "btn btn-primary"> Send Message</button>
</form>
</div>

</section>
  )
}

export default Contact
