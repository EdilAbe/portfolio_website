import React from 'react'
import './Endorsements.css'
import AVTR1  from '../../assets/avatar1.jpg'
import AVTR2  from '../../assets/avatar2.jpg'
import AVTR3  from '../../assets/avatar3.jpg'
import AVTR4  from '../../assets/avatar4.jpg'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Edil Abe',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ut? Maxime voluptas inventore beatae, minus commodi nam, sapiente eius consequuntur eos, nobis placeat blanditiis corrupti. Optio iusto minima magnam officiis?"
  },  {
    avatar: AVTR2,
    name: 'Edil Abe',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ut? Maxime voluptas inventore beatae, minus commodi nam, sapiente eius consequuntur eos, nobis placeat blanditiis corrupti. Optio iusto minima magnam officiis?"
  },  {
    avatar: AVTR3,
    name: 'Edil Abe',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ut? Maxime voluptas inventore beatae, minus commodi nam, sapiente eius consequuntur eos, nobis placeat blanditiis corrupti. Optio iusto minima magnam officiis?"
  },  {
    avatar: AVTR4,
    name: 'Edil Abe',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ut? Maxime voluptas inventore beatae, minus commodi nam, sapiente eius consequuntur eos, nobis placeat blanditiis corrupti. Optio iusto minima magnam officiis?"
  },
]


const Endorsements = () => {
  return (
<section id = "endorsements">  
<h5>Review from colleagues</h5>
<h2> Endorsements</h2>

<Swiper className = "container endorsements_container"
 modules={[ Pagination]}
 spaceBetween={40}
 slidesPerView={1}
 pagination={{ clickable: true }}

> 
 {data.map(({avatar, name, review}, index) => {
  return(
    <SwiperSlide key = {index} className="endorsement">
  <div className="client_avatar">
  <img src= {avatar} alt = "Avatar One"/>
  </div>
  <h5 className = "client_name"> {name}</h5>
  <small className = "client_review">{review}</small>
</SwiperSlide>
  )
 })

 }
</Swiper>
 </section>  )
}

export default Endorsements