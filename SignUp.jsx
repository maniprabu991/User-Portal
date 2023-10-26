import React, { useState } from 'react'
import { Container, Form, Button, FormControl } from "react-bootstrap";
import '../Styles/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState ({
        firstname: "",
        lastname: "",
        email: "",
        password:""
    });
    
    const handleChange = (e) =>{
        const{ name, value}=e.target;
        setFormData({...formData, [name]: value});
    };
        const handleSubmit = (e) => {
            e.preventDefault();
         console.log(formData);
   };


    return (
        <Container>
            <h1>Create Account</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>First Name</Form.Label>
                <FormControl type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <FormControl type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                <Form.Label>Email</Form.Label>
                <FormControl type="text" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                <Form.Label>Password</Form.Label>
                <FormControl type="text" name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>

                <Button variant="success" type="submit">Register</Button>{' '}
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </Form>

        </Container>
    )
}

export default SignUp
