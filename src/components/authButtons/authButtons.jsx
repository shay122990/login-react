import React from "react"
import "./authButtons.css"
import { FcGoogle } from "react-icons/fc"
import { AiFillFacebook } from "react-icons/ai"
import { FaApple } from "react-icons/fa"
import { Button } from "react-bootstrap"

const AuthButtons = () => {
  return (
    <div className='button-container'>
      <Button className='google'>
        <FcGoogle className='google-icon' />
        <span>Sign in with Google</span>
      </Button>

      <Button className='facebook'>
        <AiFillFacebook className='facebook-icon' />
      </Button>

      <Button className='apple'>
        <FaApple className='apple-icon' />
      </Button>
    </div>
  )
}

export default AuthButtons
