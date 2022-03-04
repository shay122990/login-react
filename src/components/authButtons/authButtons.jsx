import React from "react"
import "./authButtons.css"
import { FcGoogle } from "react-icons/fc"
import { AiFillFacebook } from "react-icons/ai"
import { FaApple } from "react-icons/fa"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { fbSignInInitiate, googleSignInInitiate } from "../../redux/actions"

const AuthButtons = () => {
  const dispatch = useDispatch()

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate())
  }
  const handleFBSignIn = () => {
    dispatch(fbSignInInitiate())
  }
  return (
    <div className='button-container'>
      <Button onClick={handleGoogleSignIn} className='google btn'>
        <FcGoogle className='google-icon icon' />
        <span>Sign in with Google</span>
      </Button>

      <Button onClick={handleFBSignIn} className='facebook btn'>
        <AiFillFacebook className='facebook-icon icon' />
      </Button>

      <Button className='apple btn'>
        <FaApple className='apple-icon icon' />
      </Button>
    </div>
  )
}

export default AuthButtons
