/*Create a registration form with the following fields:
- Username
- Email
- Password
- Phone Number
On clicking Register:
- Validate all fields (no empty inputs)
- Store Username and Password in localStorage
- Show alert messages:
- Registration Successful
- All fields are required*/
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

function Register() {
  
  const navigate=useNavigate();
  const [validated, setValidated] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      alert("All fields are required");
      return;
    }

    // Store data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful");
    // Clear form
    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");
    setValidated(false);
    navigate("/login");
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center gap-2 ">
      <h2 className="text-center mb-4">Registration Form</h2>

      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3"
      >
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

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>

          <Form.Control
            className="w-100"
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Control.Feedback type="invalid">
            Email is required.
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

        {/* Phone Number */}
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>

          <Form.Control
            className="w-100"
            type="tel"
            placeholder="Enter Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Form.Control.Feedback type="invalid">
            Phone Number is required.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;