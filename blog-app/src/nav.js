import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
                <li>Blog</li>
            </ul>
        </nav>
    );
};

export default Navbar;