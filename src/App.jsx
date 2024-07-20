import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Landing/Home";
import About from "./Pages/Landing/About";
import Team from "./Pages/Landing/Team";
import Contact from "./Pages/Landing/Contact";


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
