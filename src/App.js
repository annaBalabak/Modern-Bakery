import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contacts from "./pages/Contacts/Contacts";
import Header from "./layouts/Header/Header";
import SupportModal from "./layouts/Support/SupportModal/SupportModal";
import Home from "./pages/Home/Home";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
        <SupportModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
