import React from 'react'
import { Container, Button } from 'react-bootstrap'
import "../Styles/Home.css"

const Home = () => {
    return (
      <Container>
        <h1>Welcome to User Portal</h1>
        <p>We always serve you! <Button variant="success" type="submit">Get Started</Button></p>
        

      </Container>
    )
}

export default Home
