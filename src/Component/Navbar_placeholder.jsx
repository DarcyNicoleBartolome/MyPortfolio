import React, { useEffect, useRef } from 'react'
import './Navbar_placeholder.css'
// import logo from '../../assets/logo.png'
// import search_icon from '../../assets/search_icon.svg'
// import bell_icon from '../../assets/bell_icon.svg'
// import profile_img from '../../assets/profile_img.png'
// import caret_icon from '../../assets/caret_icon.svg'
// import { logout } from '../../firebase'


const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src="" alt="logo" />
        <ul>
          <li>Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src="" alt="" className='icons'/>
        <p>testing</p>
        <img src="" alt="" className='icons'/>
        <div className="navbar-profile">
          <img src="" alt="" className='profile'/>
          <img src="" alt="" />
          <div className="dropdown">
            <p onClick={() => {logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar