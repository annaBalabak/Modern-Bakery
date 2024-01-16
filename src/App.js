import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contacts from "./pages/Contacts";
import Header from "./layouts/Header";
import SupportModal from "./layouts/Support/SupportModal";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <SupportModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
