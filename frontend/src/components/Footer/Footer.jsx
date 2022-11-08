import React from 'react'
import './Footer.css'
import {BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'


const Footer = () => {
  return ( 
    <footer>
<ul className = "permalinks">
  <li> <a href ="#">Home</a> </li>
  <li> <a href ="#">about</a> </li>
  <li> <a href ="#">Experience</a> </li>
  <li> <a href ="#">Portfolio</a> </li>
  <li> <a href ="#">Endorsements</a> </li>
  <li> <a href ="#">Contact</a> </li>
</ul>

 <div className="footer_socials">
 <a href= "https://linkedin.com" target = "_blank">  <BsLinkedin /> </a>
        <a href= "https://github.com" target = "_blank"> < BsGithub /> </a>
        <a href= "https://instagram.com" target = "_blank">  <BsInstagram /></a>
 </div>

 <div className="footer_copyright">
  <small>&copy;Edilawit Tsehay. All rights reserved</small>
 </div>
    </footer>
  )
}

export default Footer