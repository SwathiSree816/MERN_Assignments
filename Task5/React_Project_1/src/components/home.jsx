/*Display a welcome message (Welcome, Username)
Add a Logout button
On clicking Logout:
- Redirect to Login Page
- Show alert: Logged out successfully*/ 
import React from "react";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
function Home() {
    const Navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("isLoggedIn");
        alert("Logged Out Successfully");
        Navigate("/login");
    }
    return ( 
        <div className="container mt-5">
            <h1 className="mb-5">Welcome {localStorage.getItem("username")}</h1>
            <Button type="submit" onClick={handleLogout}>Logout</Button>
        </div>
     );
}

export default Home;