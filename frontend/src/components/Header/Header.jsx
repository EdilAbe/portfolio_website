import './Header.css'
import React from 'react'
import CTA from './CTA'
//import ME from '../../assets/me.jpg'
import Socials from './Socials'

const Header = () => {
  return (
<header>
<div className = "  container header_container">
  <h3>
    Hello I'm
  </h3>
  <h1>Edilawit Tsehay</h1>
  <h5 className = "text-light"> Fullstack Developer</h5>
  <CTA />
  <Socials />
  <div className = "me"> 
  {/* <img src = {ME} alt= "MY" /> */}
  </div>
   <a href = "#contact" className = 'scroll_down'>Scroll Down</a>
</div>
</header>
    )
}

export default Header
