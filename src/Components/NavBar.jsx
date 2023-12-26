import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const NavBar = () => {
  return (
    <>
    <h1 className='Heading'>News Hub</h1>
    <div className='Nav'>
      <Link to='/'className='link' >Apple</Link>
      <Link to='/tesla' className='link'>Tesla</Link>
      <Link to='/business'className='link'>Business</Link>
      <Link to='/techcrunch' className='link'>TechCrunch</Link>
      <Link to='/wallStreet' className='link'>By the wall street</Link>
    </div>
    </>
  )
}

export default NavBar
