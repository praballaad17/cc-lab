import React, { useState } from 'react'
import axios from 'axios';
const apiEndpoint = 'http://localhost:3003/api';

export default function Signup() {
    const [user, setUser] = useState();
    console.log(user);
    const handleSignup = async () => {
        try {
            const { data } = await axios.post(`${apiEndpoint}/signup`, {
                user: user
            });
            return data;
        } catch (err) {
            console.log1(err);
        }
    }

    return (
        <div className='signup'>
            <h1>Signup</h1>
            <div className='signup__input'>
                <div>Employee Id: </div>
                <input type="text" onChange={(e) => setUser({ ...user, employeeId: e.target.value })} />
            </div>
            <div className='signup__input'>
                <div >First Name</div>
                <input type="text" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
            </div>
            <div className='signup__input'>
                <div>Last Name</div>
                <input type="text" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
            </div>
            <div className='signup__input'>
                <div>Date of Birth</div>
                <input type="date" onChange={(e) => setUser({ ...user, dob: e.target.value })} />
            </div>
            <div className='signup__input'>
                <div>Phone Number</div>
                <input type="text" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
            </div>
            <div className='signup__input'>
                <div>Password</div>
                <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </div>
            <button style={{ margin: "10px" }} onClick={handleSignup}>Signup</button>
        </div>
    )
}
