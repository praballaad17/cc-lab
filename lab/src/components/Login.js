import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
const apiEndpoint = 'http://localhost:3003/api';

export default function Login() {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const { data } = await axios.post(`${apiEndpoint}/login`, {
                user: user
            });

            if (data) {
                history.push({
                    pathname: "/report",
                    state: {
                        employeeId: user.employeeId
                    }
                });
            }
            else {
                setError(data)
            }
        } catch (err) {
            console.log1(err);
        }
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <div>
                <div className='signup__input'>
                    <div>Employee Id: </div>
                    <input type="text" onChange={(e) => setUser({ ...user, employeeId: e.target.value })} />
                </div>
                <div className='signup__input'>
                    <div>Password </div>
                    <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
            </div>
            {/* <input type="text" name="employeeId" onChange={(e) => setUser({ ...user, employeeId: e.target.value })} />
            <input type="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} /> */}
            <button style={{ margin: "10px" }} onClick={handleLogin}>Login</button>
        </div>
    )
}
