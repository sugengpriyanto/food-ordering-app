import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Brand</Link>
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
                <ul className="navbar-nav m-lg-1">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login | </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Navbar