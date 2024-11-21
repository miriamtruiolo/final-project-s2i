import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Temperature from "./pages/Temperature";
import CO2 from "./pages/CO2";
import Glaciers from "./pages/Glaciers";
import Methane from "./pages/Methane";
import NO2 from "./pages/NO2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Temperature" element={<Temperature />} />
        <Route path="/CO2" element={<CO2 />} />
        <Route path="/Glaciers" element={<Glaciers />} />
        <Route path="/Methane" element={<Methane />} />
        <Route path="/NO2" element={<NO2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
