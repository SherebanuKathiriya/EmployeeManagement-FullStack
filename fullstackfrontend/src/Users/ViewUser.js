import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewUser() {
  const {id} = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
})

useEffect(() => {
  loadUser()
}, [])

const loadUser =async () => {
  console.log(id)
  const result = await axios.get(`http://localhost:8081/user/${id}`);
  setUser(result.data);
  console.log(result.data)
}

  return (
    <div className="container my-5" >
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of User id: {user.id}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Name: </b> {user.name}</li>
              <li className="list-group-item"><b>Username: </b>  {user.username}</li>
              <li className="list-group-item"><b>Email Address: </b>  {user.email}</li>
            </ul>
          </div>
          <Link type="button" class="btn btn-outline-dark btn-sm my-4" to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
