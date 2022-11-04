import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Form() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handler(e){
        e.preventDefault();
        alert("Name = "+name +" | Email = "+ email +" | Password = "+ password)
    }
    return (
        <>
            <h1>Login Form</h1>
            <div>
                <form onSubmit={handler}>
                    <label htmlFor="name"  >Name:</label>
                    <input required type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input required type="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input required type="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>

            <Link to="/">Home</Link>
        </>
    )
}