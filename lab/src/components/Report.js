import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";
const apiEndpoint = 'http://localhost:3003/api';

export default function Report() {
    const location = useLocation();
    const [user, setUser] = useState();
    const [fuser, setfUser] = useState();
    const [employeeId, setEmId] = useState()

    console.log(location.state);
    useEffect(async () => {
        try {
            const { data } = await axios.get(`${apiEndpoint}/get-user/${location.state.employeeId}`);

            if (data) {
                console.log(data);
                setUser(data);
            }
            else {
                // setError(data)
            }
        } catch (err) {
            console.log(err);
        }
    }, [])

    console.log(employeeId);

    const getUser = async () => {
        try {
            const { data } = await axios.get(`${apiEndpoint}/get-salary/${employeeId}`);

            if (data) {
                console.log(data);
                setfUser(data);
            }
            else {
                // setError(data)
            }
        } catch (err) {
            console.log(err);
        }
    }

    console.log(user, fuser);
    return (
        <div className='report'>
            <h1>Report</h1>
            <table className=''>
                <tr >
                    <td>Employee Id</td>
                    <td>{user?.employeeId}</td>
                </tr>
                <tr >
                    <td>First Name </td>
                    <td>{user?.firstName}</td>
                </tr>
                <tr >
                    <td >Last Name </td>
                    <td>{user?.lastName}</td>
                </tr>
                <tr >
                    <td>Date Of Birth </td>
                    <td>{user?.dob}</td>
                </tr>
                <tr >
                    <td >Phone Number </td>
                    <td>{user?.phone}</td>
                </tr>
            </table>

            <div>
                <h3>Get Salary Details</h3>
                <input typr="text" onChange={(e) => setEmId(e.target.value)} />
                <button onClick={getUser}>Get User</button>
                <div>
                    {fuser ? <table className='table'>
                        <tr>
                            <td>employee Id</td>
                            <td>{fuser?.user.employeeId}</td>
                        </tr>
                        <tr>
                            <td>First Name</td>
                            <td>{fuser?.user.firstName}</td>
                        </tr>
                        <tr>
                            <td>lastName</td>
                            <td>{fuser?.user.lastName}</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td>{fuser?.user.dob}</td>
                        </tr>

                        <tr>
                            <td>Phone Number</td>
                            <td>{fuser?.user.phone}</td>
                        </tr>
                        <tr>
                            <td>Job Role</td>
                            <td>{fuser?.salary.jobRole}</td>
                        </tr>
                        <tr>
                            <td>Monthly Salary</td>
                            <td>{fuser?.salary.monthlySalary}</td>
                        </tr>
                        <tr>
                            <td>Yearly Bonus</td>
                            <td>{fuser?.salary.yearlyBonus}</td>
                        </tr>
                        <tr>
                            <td>Total Salary</td>
                            <td>{parseInt(fuser?.salary.yearlyBonus) + parseInt(fuser?.salary.monthlySalary)}</td>
                        </tr>
                    </table> : <></>}
                </div>
            </div>
        </div>

    )
}
