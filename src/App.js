import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import SignIn from "./pages/signIn/signIn-page"

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* When you start the project, direct the URL to /signin */}
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
