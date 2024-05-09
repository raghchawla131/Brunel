import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='nav'>
          <img className='nav__logo' src="/public/Vector.png" alt="" />
          <div className='nav__right'>
          <Link to="/registration" className="nav__right--1">Get Projects</Link>
            <div className='nav__right--2'>
              Onboard talent
            </div>
          </div>
      </div>
    </>
  )
}

export default Navbar