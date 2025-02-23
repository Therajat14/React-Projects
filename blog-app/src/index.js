import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
import Blog from './blog';
import NotFound from './notfound';
import { useState } from "react";
import Post from './postPage';
import { postsDB } from './postData';
import NewPost from './newpost';




const Index = () => {


  const [post, setPost] = useState(postsDB); useEffect(() => {
    console.log(post)
  }, [post])

  const handelDelete = (id) => {
    const postlist = post.filter((item) => item.id !== Number(id));
    setPost(postlist);
    setTimeout(() => {
      alert("Blog Post Deleted");
    }, 500);
  }

  const handelSubmit = (title, body) => {

    const id = post.length > 0 ? Math.max(...post.map(post => post.id)) + 1 : 0;
    console.log(id)
    const newBlog = {
      id,
      title,
      datetime: new Date().toISOString(),
      body
    }
    setPost([...post, newBlog]);
    setTimeout(() => {
      alert("Blog Post Added");
    }, 500);
    console.log("Addded");





  }


  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home post={post} />} />
            <Route path='/about' element={<About />} />
            <Route path='/newpost' element={<NewPost handelSubmit={handelSubmit} />} />
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

