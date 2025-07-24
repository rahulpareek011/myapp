import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault()

    // Get saved user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"))

    if (!savedUser) {
        alert("No user found. Please sign up first.")
        return
    }

    // Check if email and password match
    if (savedUser.email === email && savedUser.password === password) {
        alert("Login Successful 🎉")
    } else {
        alert("Invalid Email or Password ❌")
    }

    // Clear form
    setEmail('')
    setPassword('')
}

    return (
        <div>
            <div className='newAcc'>
                <h2>Welcome Back</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder='Enter Your Mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className='newAccFooter'>
                        <button>LOGIN</button>
                    </div>
                    <br />
                    <span>new user?</span>
                    <Link to='/signup'> SignUp</Link>

                </form>

                <div className='navStyle'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/signup'}>Signup</Link>
                </div>
            </div>
        </div>
    )
}
export default Login
