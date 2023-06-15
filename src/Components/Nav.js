import React from 'react'
import { Link } from 'react-router-dom'
import "./Component.css"
const Nav = () => {
  return (
    <>
    <div className='links'>
    <Link to="/" className='link'>Home</Link>
    <Link to="/student" className='link'>Students</Link>
    <Link to="/contactus" className='link'>Contact Us</Link>
    </div>
    </>
  )
}


export default Nav