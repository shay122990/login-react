import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import "./loginForm.css"
import { BiHide } from "react-icons/bi"

const LoginForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e)
  }

  // Password toggle handler
  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='login-container'>
      <Form className='login-form' onSubmit={submitHandler}>
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
            type={showPassword ? "text" : "password"}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <BiHide className='show-icon' onClick={togglePassword} />
        </Form.Group>
        <Button className='continue-btn' type='submit'>
          Continue
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
