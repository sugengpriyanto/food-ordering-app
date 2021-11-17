import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './Navbar'
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './Login'
import Register from './Register'

export default function MainComponent() {
    return (
        <Router>
            <Navbar />
            <br />
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/products" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}
