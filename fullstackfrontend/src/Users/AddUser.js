import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const {name, username, email}= user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/user", user)
        navigate("/")
    }

    return (
        <div className="container my-5" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div class="mb-3">
                            <label for="exampleInputName" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputName" name="name" value={name} placeholder='Enter your Name' onChange={(e) => onInputChange(e)} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputUsername" class="form-label">Username</label>
                            <input type="text" class="form-control" id="exampleInputUsername" name="username" value={username} placeholder=' Enter your Username' onChange={(e) => onInputChange(e)} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={email} placeholder='Enter your Email' onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" class="btn btn-outline-primary">Submit</button>
                        <Link type="button" class="btn btn-outline-danger mx-2" to="/   ">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
