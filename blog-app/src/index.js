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
import Post from './postPage';



const Index = () => {


  const [post, setPost] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      datetime: "2025-02-23T10:00:00Z",
      body: "React is a popular JavaScript library for building user interfaces, especially single-page applications. To get started, you'll need Node.js installed. First, create a new project using Create React App by running `npx create-react-app my-app`. Once set up, navigate into your project folder and run `npm start` to launch the development server. React components are the building blocks of your UI, allowing you to split your app into reusable pieces."
    },
    {
      id: 2,
      title: "Understanding useState Hook",
      datetime: "2025-02-22T15:30:00Z",
      body: "The `useState` hook is a fundamental concept in React for managing state in functional components. It allows you to create and update variables that trigger re-renders when changed. To use it, import `useState` from React and define a state variable: `const [count, setCount] = useState(0);`. You can then modify this state using `setCount(newValue)`, which updates the UI automatically. Understanding `useState` is key to building dynamic applications."
    },
    {
      id: 3,
      title: "React vs Vue: Which One to Choose?",
      datetime: "2025-02-20T12:45:00Z",
      body: "React and Vue.js are two of the most popular front-end JavaScript frameworks. React, backed by Facebook, focuses on a component-based architecture and is widely used in large-scale applications. Vue.js, on the other hand, is known for its simplicity and ease of integration. If you're working on a large, scalable project with a strong need for reusable components, React might be the better choice. Vue, however, is great for smaller projects or developers looking for a simpler learning curve."
    },
    {
      id: 4,
      title: "Building a To-Do App with React",
      datetime: "2025-02-18T08:20:00Z",
      body: "A to-do app is a great beginner project for learning React. Start by setting up a new React project and creating a `TodoList` component. Use the `useState` hook to manage the list of tasks. Each task should be represented as an object with properties like `id`, `text`, and `completed`. Render tasks dynamically using `map()`, and add features like marking tasks as done and deleting them. With React, you can easily create interactive and responsive UI components."
    }
  ]);




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
            <Route path='/post/:id' element={<Post post={post} />} />
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

