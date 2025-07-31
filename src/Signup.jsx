import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})


    const handleSubmit = (e) => {
        e.preventDefault()

        const allError = {}
        if (!name) allError.name = "name is required"
        if (!email) allError.email = "email is required"
        if (!phone) allError.phone = "phone is required"
        if (!password) allError.password = "password is required"
        
        if(Object.keys(allError).length>0){
            setError(allError);
            return;
        }

        const userData = { name, email, password, phone }

        // Save to localStorage as JSON string
        localStorage.setItem("user", JSON.stringify(userData))
        alert("Account Created Successfully ✅")
        console.log("User saved:", localStorage.getItem("user"))

        // if(!(name && email && phone && password)){
        //     setError("All input field requitd");
        //     return
        // } 

        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
    }


    return (
        <div className='newAcc'>
            <h2>Create new account</h2>
            {/* {error && <p style={{color:"red"}}>{error}</p>} */}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder='Enter Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {error.name && <p style={{ color: "red" }}>{error.name}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder='Enter Your Mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email && <p style={{ color: "red" }}>{error.email}</p>}

                </div>
                <div>
                    <input
                        type="phone"
                        placeholder='Enter Your Mobile No.'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {error.phone && <p style={{ color: "red" }}>{error.phone}</p>}

                </div>
                <div>
                    <input
                        type="password"
                        placeholder='create password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error.password && <p style={{ color: "red" }}>{error.password}</p>}

                </div>

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
