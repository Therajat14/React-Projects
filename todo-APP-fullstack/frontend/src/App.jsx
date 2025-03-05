
import { useState, useEffect } from 'react'
import { CreateTodo } from './components/createTodo'
import TodoProvider from './todoContext';
import Todos from './components/todos';



function App() {

  // useEffect(() => {
  //   console.log("Fetching data...");

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:9000"); // ✅ Fixed URL
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json(); // ✅ Corrected JSON parsing
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <TodoProvider>
        <CreateTodo />
        <Todos />
      </TodoProvider>
    </>
  )
}

export default App
