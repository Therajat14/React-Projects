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
import { useState, useEffect } from "react";



const Index = () => {


  const [post, setPost] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      datetime: "2025-02-23T10:00:00Z",
      body: "This post explains how to get started with React and create your first project."
    },
    {
      id: 2,
      title: "Understanding useState Hook",
      datetime: "2025-02-22T15:30:00Z",
      body: "The useState hook is essential for handling state in React functional components."
    },
    {
      id: 3,
      title: "React vs Vue: Which One to Choose?",
      datetime: "2025-02-20T12:45:00Z",
      body: "A comparison of React and Vue.js, discussing their advantages and use cases."
    },
    {
      id: 4,
      title: "Building a To-Do App with React",
      datetime: "2025-02-18T08:20:00Z",
      body: "Step-by-step guide on how to build a simple to-do app using React and state management."
    }
  ]);




  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home post={post} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Service' element={<Home />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/para/:id' element={<Paramas />} />
          <Route path='*' element={<NotFound />} />
        </Routes >
        <Footer />
      </BrowserRouter >
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Index />


);

