import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTodo } from "./components/createTodo";
import TodoProvider from "./todoContext";
import Todos from "./components/todos";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* ✅ Default Route for Todos */}
        <Route
          path="/"
          element={
            <TodoProvider>
              <CreateTodo />
              <Todos />
            </TodoProvider>
          }
        />

        {/* ✅ Route for Home Page */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
