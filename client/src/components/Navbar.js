import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar bg-light container px-3 mb-3'>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload Image</Link>
        <Link to="/secure-upload">Secure Image</Link>
    </div>
  )
}

export default Navbar