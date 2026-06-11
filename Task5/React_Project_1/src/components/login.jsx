/*Create a login form with:
- Username
- Password
On clicking Login:
- Retrieve stored data from localStorage
- If username & password match → redirect to Home Page
- Else show alert: Invalid Username or Password*/
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate=useNavigate();
    const [validated,setValidated]=useState(false);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        if(form.checkValidity()===false){
            e.stopPropagation();
            setValidated(true);
            return;
        }
        const storedUsername=localStorage.getItem("username");
        const storedPassword=localStorage.getItem("password");
        if(!storedUsername || !storedPassword)
        {
            alert("Please register first");
            navigate("/register");
        }
        else
        {
            if(username===storedUsername && password===storedPassword){
            localStorage.setItem("isLoggedIn","true");
            alert("Login Successful");
            navigate("/home");
            }else{
            alert("Invalid Username or Password");
            }
        }

        setUsername("");
        setPassword("");
    }
    return ( 
            <div className="container mt-5 d-flex flex-column align-items-center gap-3">
                <h6>Login is required to go to home page</h6>
                <h2 className="text-center mb-4">Login Form</h2>
                <Form noValidate validated={validated} onSubmit={handleLogin}>
                {/* Username */}
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    className="w-100"
                    type="text"
                    placeholder="Enter Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                    Username is required.
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    className="w-100"
                    type="password"
                    placeholder="Enter Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                Password is required.
                </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">Login</Button>
                </Form>
            </div>
    );
}

export default Login;