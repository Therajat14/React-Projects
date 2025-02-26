import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Fixed import
import './index.css';
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
import Blog from './blog';
import NotFound from './notfound';
import Post from './postPage';
import { postsDB } from './postData';
import NewPost from './newpost';

const Index = () => {
  const [post, setPost] = useState(postsDB);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(postsDB); // Initialize with all posts

  // Delete Post Function
  const handleDelete = (id) => {
    const postlist = post.filter((item) => item.id !== Number(id));
    setPost(postlist);
    setTimeout(() => {
      alert("Blog Post Deleted");
    }, 500);
  };

  // Search Function
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Add New Post Function
  const handleSubmit = (title, body) => {
    const id = post.length > 0 ? Math.max(...post.map((post) => post.id)) + 1 : 0;
    const newBlog = {
      id,
      title,
      datetime: new Date().toISOString(),
      body,
    };
    setPost([...post, newBlog]);
    setTimeout(() => {
      alert("Blog Post Added");
    }, 500);
  };

  // Search Filter Logic inside useEffect
  useEffect(() => {
    if (search.trim() === "") {
      setSearchResult(post); // Show all posts when search is empty
    } else {
      const results = post.filter((item) =>
        item.body.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(results);
    }
  }, [post, search]); // Correct dependency array

  // ✅ Moved JSX inside return statement
  return (
    <BrowserRouter>
      <div className="App">
        <Header search={search} handleSearch={handleSearch} />
        <main>
          <Routes>
            <Route path="/" element={<Home post={searchResult} />} />
            <Route path="/about" element={<About />} />
            <Route path="/newpost" element={<NewPost handleSubmit={handleSubmit} />} />
            <Route path="/Service" element={<Home />} />
            <Route path="/Blog" element={<Blog post={searchResult} />} /> {/* Fixed */}
            <Route path="/post/:id" element={<Post post={post} handleDelete={handleDelete} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
