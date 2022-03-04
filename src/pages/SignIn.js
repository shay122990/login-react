import React from "react"
import "./SignIn.css"
import { Col, Container, Row } from "react-bootstrap"
import { AiFillCheckCircle } from "react-icons/ai"
import SideImage from "../components/sideImage/sideImage"
import LoginForm from "../components/loginForm/loginForm"
import AuthButtons from "../components/authButtons/authButtons"
import ThemeToggle from "../components/theme-toggle/theme-toggle"
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <Container fluid className='container'>
      <Row>
        <Col sm={8}>
          <SideImage />
        </Col>
        <Col sm={4}>
          <div className='logo-container'>
            <h1 className='logo'>
              Travelguru <AiFillCheckCircle />
            </h1>
            <ThemeToggle />
          </div>
          <hr />
          <h2>Sign in to Travelguru</h2>
          <p>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </p>
          <hr />
          <LoginForm />
          <hr />
          <div className='option'> - OR - </div>
          <AuthButtons />
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn
