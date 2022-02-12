import React from "react"
import { Form, Button } from "react-bootstrap"
import "./loginForm.css"

const LoginForm = () => {
  return (
    <div className='login-container'>
      <Form className='login-form'>
        <Form.Group className='input-group' controlId='formBasicName'>
          <Form.Control className='input' type='name' placeholder='Name' />
        </Form.Group>
        <Form.Group className='input-group' controlId='formBasicEmail'>
          <Form.Control className='input' type='email' placeholder='Email' />
        </Form.Group>
        <Form.Group className='input-group' controlId='formBasicPassword'>
          <Form.Control
            className='input'
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        <Button className='continue-btn' type='submit'>
          Continue
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
