import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = { name, email, password, phone }

        // Save to localStorage as JSON string
        localStorage.setItem("user", JSON.stringify(userData))
        alert("Account Created Successfully ✅")
        console.log("User saved:", localStorage.getItem("user"))



        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
    }


    return (
        <div className='newAcc'>
            <h2>Create new account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder='Enter Your Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="phone"
                    placeholder='Enter Your Mobile No.'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='create password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className='newAccFooter'>
                    <button>CREATE ACCOUNT</button>
                </div>
                <br />
                <span>have a account?</span>
                <Link to='/login'> Login</Link>


            </form>

            <div className='navStyle'>
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/signup'}>Signup</Link>
            </div>

        </div>
    )
}

export default Signup
