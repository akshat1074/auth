
import Home from "./pages/Home"
import React from 'react'
import  Signup  from "./pages/Signup"
import { Signin } from "./pages/signin"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
     
    </Routes>
  </BrowserRouter>
}

export default App