import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { VscFolderLibrary} from 'react-icons/vsc'
import { FiUsers} from 'react-icons/fi'


const About = () => {
  return (
<section id = "about">  
<h5>Get to know </h5>
<h2> About me</h2>
<div className = "container about_container">
  <div className = "about_me">
    <div className = "about_me_image">
      <img src = {ME} alt = "About Image" />
    </div>
  </div>
  <div className = "about_content">
<div className = "about_cards">
  <article  className = "about_card">
     <FaAward  className = 
    "about_icon"/>
        <h5>Experience</h5>
    <small> 3+ Years Working</small>
  </article>
  <article  className = "about_card">
     <FiUsers  className = 
    "about_icon"/>
        <h5>clients</h5>
    <small> 50+ clients</small>
  </article>
  <article  className = "about_card">
     <VscFolderLibrary  className = 
    "about_icon"/>
        <h5>Projects</h5>
    <small>15+ Completed</small>
  </article>
</div>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia quae ipsam harum, voluptatum excepturi ad dolor quaerat repellat ex nobis ut ea doloribus incidunt sapiente explicabo accusantium consequuntur voluptates?</p>
 <a href= "#contact" className = "btn btn-primary"> Let's Talk </a>
  </div>
</div>
 </section>  )
}

export default About