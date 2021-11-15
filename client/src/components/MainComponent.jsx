import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import Navbar from './Navbar'
import MenuComponent from './MenuComponent'
import ContactComponent from './ContactComponent'
import AboutComponent from './AboutComponent'

export default function MainComponent() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<HomeComponent />} />
                <Route path="/menu" element={<MenuComponent />} />
                <Route path="/about" element={<AboutComponent />} />
                <Route path="/contact" element={<ContactComponent />} />
            </Routes>
            
        </Router>
    )
}
