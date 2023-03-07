import React from 'react';
import './Signup.css'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='signup'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" className='input'/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='input'/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="text" placeholder="Contact" className='input'/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="Date of Birth"className='input' />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address"className='input' />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='input'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type="password" placeholder="password" className='input'/>
        
      </Form.Group>
     
      <Button variant="success" type="submit" className='create'>
        Sign Up
      </Button>
      <h3>
        Already have an account? 
        <Link>Login</Link>
     </h3>
    </Form>
  


        </div>
    );
}

export default Signup;
