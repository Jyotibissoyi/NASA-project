import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>

      <nav className='main_nav'>
        <div className="logo">
          <h1>Space Tour</h1>
        </div>
        <div className='menu_nav'>
          <ul>
            <li className='li_nav'> <NavLink className="a_nav" to="/">Space Picture</NavLink></li>
            <li className='li_nav'> <NavLink className="a_nav" to="/About">About</NavLink></li>
            <li className='li_nav'> <NavLink className="a_nav" to="/Search">Search</NavLink></li>
            <li className='li_nav'> <NavLink className="a_nav" to="/Contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>

    </div>
  )
}



export default Navbar


