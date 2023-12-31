import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([])
    const {id} = useParams();
    useEffect(() => {   //
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/users")
        setUsers(result.data)
    };
    
    const deleteUser = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            await axios.delete(`http://localhost:8081/user/${id}`);
            loadUsers();
        }
    };

    return (
        <div className="container my-4" >
            <div className="py-4">
                <table className="table table-striped border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Username</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.username}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link className="btn btn-info mx-2 btn-sm" to={`/viewUser/${user.id}`}>View</Link>
                                            <Link className="btn btn-outline-dark mx-2 btn-sm" to={`/editUser/${user.id}`}>Edit</Link>
                                            <button className="btn btn-danger mx-2 btn-sm" onClick={() => deleteUser(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
