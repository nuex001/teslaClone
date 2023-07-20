// import React  from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './layout/components/Nav'
import Home from "./layout/pages/Home";
import './App.css'
import Footer from "./layout/components/Footer";

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter >
 
  )
}

export default App
