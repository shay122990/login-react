import React from "react"
import "./authButtons.css"
import { FcGoogle } from "react-icons/fc"
import { AiFillFacebook } from "react-icons/ai"
import { FaApple } from "react-icons/fa"
import { Button } from "react-bootstrap"

const AuthButtons = () => {
  return (
    <div className='button-container'>
      <Button className='google btn'>
        <FcGoogle className='google-icon icon' />
        <span>Sign in with Google</span>
      </Button>

      <Button className='facebook btn'>
        <AiFillFacebook className='facebook-icon icon' />
      </Button>

      <Button className='apple btn'>
        <FaApple className='apple-icon icon' />
      </Button>
    </div>
  )
}

export default AuthButtons
