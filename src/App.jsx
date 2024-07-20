import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Landing/Home";
import About from "./Pages/Landing/About";


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
