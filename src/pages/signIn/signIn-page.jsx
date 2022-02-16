import React from "react"
import "./signIn-page.css"
import { Col, Container, Row } from "react-bootstrap"
import { AiFillCheckCircle } from "react-icons/ai"
import SideImage from "../../components/sideImage/sideImage"
import LoginForm from "../../components/loginForm/loginForm"
import ThemeToggle from "../../components/theme-toggle/theme-toggle"
import AuthButtons from "../../components/authButtons/authButtons"

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
          <h2>Sign In to Travelguru</h2>
          <p>
            Don't have an account? <a href='/'>Sign up</a>
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
