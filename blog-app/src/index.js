import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
import Contact from './contact';
import Blog from './blog';

import NotFound from './notfound';
import { useState } from "react";
import Post from './postPage';
import { postsDB } from './postData';



const Index = () => {

  const [post, setPost] = useState(postsDB); useEffect(() => {
    console.log(post)
  }, [post])

  const handelDelete = async (id) => {
    const postlist = post.filter((item) => item.id !== Number(id));
    await setPost(postlist);


  }


  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home post={post} />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/Service' element={<Home />} />
            <Route path='/Blog' element={<Blog post={post} />} />
            <Route path='/post/:id' element={<Post post={post} handelDelete={handelDelete} />} />
            <Route path='*' element={<NotFound />} />
          </Routes >
        </main>
        <Footer />
      </BrowserRouter >
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Index />


);

