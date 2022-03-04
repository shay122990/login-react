import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import "./loginForm.css"
import { BiHide } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginInitiate } from "../../redux/actions"

const LoginForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const { currentUser } = useSelector((state) => state.user)

  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate("/home")
    }
  }, [currentUser, navigate])

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      return
    }
    dispatch(loginInitiate(email, password))
  }

  // Password toggle handler
  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      {/* {error && <Alert variant='danger'> {error} </Alert>} */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className='input-group' controlId='formBasicName'>
          <Form.Control
            required
            className='input'
            type='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='input-group' controlId='formBasicEmail'>
          <Form.Control
            required
            className='input'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='input-group' controlId='formBasicPassword'>
          <Form.Control
            required
            minLength={8}
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
