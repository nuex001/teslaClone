// import React  from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './layout/Nav'
import Home from "./layout/pages/Home";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter >
 
  )
}

export default App
