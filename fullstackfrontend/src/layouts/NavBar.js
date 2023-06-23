import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <Link className="navbar-brand" to="/">Employee Management System</Link>
          </div>
          <div>
            <Link className="btn btn-outline-light me-2" to="/">Home</Link>
            <Link className="btn btn-outline-light" to="/addUser">Add User</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
