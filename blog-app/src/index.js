import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, NavLink, Route } from 'react-router-dom';
import './index.css';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Navbar from './nav';
import { RouterProvider } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <Header />
    1     <RouterProvider router={Route} />
    <Footer />
  </>
);

