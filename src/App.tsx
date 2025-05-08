import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./Aboutus";
import Contact from "./Contactus";
import AbyssMain from "./AbyssMain";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-blue-400">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Abyss" element={<AbyssMain/>}   ></Route>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
