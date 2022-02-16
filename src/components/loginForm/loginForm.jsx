import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import "./loginForm.css"

const LoginForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const handleChange = (e) => {
  //   console.log(e)
  // }
  // const handleSubmit = (e) => {
  //   e.prevenDefault()
  //   console.log(e)
  // }
  return (
    <div className='login-container'>
      <Form className='login-form'>
        <Form.Group className='input-group' controlId='formBasicName'>
          <Form.Control
            className='input'
            type='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='input-group' controlId='formBasicEmail'>
          <Form.Control
            className='input'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='input-group' controlId='formBasicPassword'>
          <Form.Control
            className='input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
