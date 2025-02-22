import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
import Contact from './contact';
import Blog from './blog';
import Paramas from './params';
import NotFound from './notfound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/Service' element={<Home />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/para/:id' element={<Paramas />} />
      <Route path='*' element={<NotFound />} />
    </Routes >
    <Footer />
  </BrowserRouter >


);

