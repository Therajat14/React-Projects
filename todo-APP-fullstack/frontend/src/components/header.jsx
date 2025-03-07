import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
const Header = () => {
    return (
        <div className="header">
            {/* ✅ Left: Project Details */}
            <div className="project-info">

                <h1>Todo App</h1>
                {/* <Link to="/home">Home</Link> */}
                <h1 className="hii"> <a
                    href="https://github.com/Therajat14/THE-BACKEND-DEVELOPER-ZERO-TO-MASTERY--therajat14.git"
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                </h1>

            </div>

            {/* ✅ Right: GitHub Link */}

        </div >
    );
};

export default Header;
