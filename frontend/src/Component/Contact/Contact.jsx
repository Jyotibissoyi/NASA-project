import React from 'react'
import image from '../images/photo.jpg'
import './Contact.css'

export default function Contact() {
  return (
    <div>
       <div className='contact'>
       <img src={image} alt="img" style={{ width: "400px", marginTop: "60px", marginLeft: "400px" }} />
            <h3 className='q'>Phone :+91 8328915901</h3>
            <h3  className='q'>email : jyotibissoyikhusbu2571@gmail.com</h3>
            <a style={{  marginLeft: "600px" }}  href="https://www.linkedin.com/in/jyoti-bissoyi-a30bb0242/" >LinkIn</a>
            <br />
            <a style={{  marginLeft: "600px" }} href="https://github.com/Jyotibissoyi/NASA-project.git">Github</a>
        </div>
    </div>
  )
}
