import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "../index.css";
function Navbar() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.clear();
        alert("You are logged out");
        navigate("/login");
    }
    return ( 
        <nav className="navbar">
            <ul>
                <li>
                    <h4>My App</h4>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;

