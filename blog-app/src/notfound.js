import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>

            <Link to="/">Go to HomePage</Link>
        </div>
    );
};

export default NotFound;