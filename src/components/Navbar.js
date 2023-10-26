import * as React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="" className="navbar-brand">
                <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">Hard Challenge</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto p-4 bg-secondary">
                    <Link to="*" className="nav-item nav-link active">Home</Link>
                    <Link to="/dashboard" className="nav-item nav-link">Dashboard</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    </div>
  );
}
