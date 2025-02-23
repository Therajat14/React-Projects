import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/newpost" className={({ isActive }) => isActive ? "active" : ""}>Post</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                </li>

                <li>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
