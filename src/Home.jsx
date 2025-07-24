import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className='navStyle'>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Signup</Link>
      </div>
    </div>
  )
}

export default Home
