import { useState } from "react";
import React from "react";
import "./footer.css";
import { FaRegWindowClose } from "react-icons/fa";

export default function Footer() {
    const [showFooter, setShowFooter] = useState(true);
    return (
        <>
            {
                showFooter &&
                <footer className="footer">
                    <div className="closeButton"
                        onClick={() => setShowFooter(false)}>
                        <FaRegWindowClose />
                    </div>
                    <p>© {new Date().getFullYear()} BlogApp. All rights reserved.</p>
                    <p>
                        Built with 💙 by <a href="https://github.com/Therajat14" target="_blank" rel="noopener noreferrer">Rajat Singh</a>
                    </p>
                    <p className="footer-note">🚧 This blog app is still under development. Expect updates soon! 🚀</p>
                </footer>
            }
        </>

    );
}
