import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className = 'header_socials'>
        <a href= "https://linkedin.com" target = "_blank">  <BsLinkedin /> </a>
        <a href= "https://github.com" target = "_blank"> < BsGithub /> </a>
        <a href= "https://instagram.com" target = "_blank">  <BsInstagram /></a>
    </div>
  )
}

export default Socials