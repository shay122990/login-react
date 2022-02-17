import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import SignIn from "./pages/signIn/signIn-page"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
