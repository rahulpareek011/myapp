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
            alert("user not available or not found. Please sign up first.")
            return
        }

        // Check if email and password match
        if (savedUser.email === email && savedUser.password === password) {
            alert("Login Successful")
        }
        else if (savedUser.email != email && savedUser.password != password) {
            alert("Invalid Email or Password")
        }
        else if (savedUser.email != email) {
            alert("Invalid Email")
        }
        else if (savedUser.password != password) {
            alert("Invalid Password")
        }

        // Clear form
        setEmail('')
        setPassword('')
    }

    const logOut = () => {
        localStorage.clear("user")
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
                    <button onClick={logOut}>Logout</button>

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
