import React from 'react'
import "./navigation.css"

const Navigation = () => {
  return (
    <div>
      <nav className='shadow p-3 mb-5 bg-white rounded'>
        <div className='logo'>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <ul>
          <span className='btn'>Home</span>
          <span className='btn'>About Us</span>
          <span className='btn'>Categories</span>
          <span className='btn'>Contact</span>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
