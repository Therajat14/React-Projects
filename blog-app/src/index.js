import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Fixed import
import ReactDOM from 'react-dom/client';

// COMPONONETS
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
import Blog from './blog';
import NotFound from './notfound';
import Post from './postPage';
import NewPost from './newpost';
import api from './api/posts';

//css files
import './index.css';



const Index = () => {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(post); // Initialize with all posts

  // Delete Post Function
  const handleDelete = async (id) => {
    const iD = id.toString();
    try {
      const postlist = post.filter((item) => item.id !== Number(id));
      const response = await api.delete(`/posts/${iD}`);
      console.log(response)
      setPost(postlist);
      setTimeout(() => {
        alert("Blog Post Deleted");
      }, 500);
    }
    catch (err) {
      console.log(err)
    }
  };

  // Search Function
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Add New Post Function
  const handleSubmit = async (title, body) => {
    const id = post.length > 0 ? Math.max(...post.map((post) => post.id)) + 1 : 0;
    const newBlog = {
      id: id.toString(),
      title,
      datetime: new Date().toISOString(),
      body,
    };

    try {

      const response = await api.post("/posts", newBlog);
      setPost([...post, response.data]);
      console.log(response)
      setTimeout(() => {
        alert("Blog Post Added");
      }, 500);
    }
    catch (err) {
      console.log("Unexpected Error")
    }
    finally {

    }

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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/posts");
        setPost(response.data)
        console.log(response)
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received;
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }


    }
    fetchData();



  }, []);

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
