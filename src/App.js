import React from "react"
import "./index.css"
import { Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import HomePage from "./pages/Home"
import SignUp from "./pages/SignUp"

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
