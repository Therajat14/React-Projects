
import { useState } from 'react'
import { CreateTodo } from './components/createTodo'
import TodoProvider from './todoContext';



function App() {


  return (
    <>
      <TodoProvider>
        <CreateTodo />
      </TodoProvider>
    </>
  )
}

export default App
