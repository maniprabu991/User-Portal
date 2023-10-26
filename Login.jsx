import React, { useState } from 'react'
import { Container, Form, Button, FormControl } from "react-bootstrap";
import '../Styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState ({
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
            <h1>User Sign In</h1>
            <Form onSubmit={handleSubmit}>
                
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <FormControl type="text" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                <Form.Label>Password</Form.Label>
                <FormControl type="text" name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>

                <Button variant="success" type="submit">Sign In</Button>{' '}
                
            </Form>

        </Container>
    )
}

export default Login
