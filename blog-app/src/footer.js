import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} BlogApp. All rights reserved.</p>
            <p>
                Built with 💙 by <a href="https://github.com/Therajat14" target="_blank" rel="noopener noreferrer">Rajat Singh</a>
            </p>
            <p className="footer-note">🚧 This blog app is still under development. Expect updates soon! 🚀</p>
        </footer>
    );
}
