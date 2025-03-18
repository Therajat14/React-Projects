import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTodo } from "./components/createTodo";
import TodoProvider from "./todoContext";
import Todos from "./components/todos";
import Header from "./components/header";
import 'dotenv/config'
dotenv.config();



function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
  console.log(process.env.REACT_APP_API_KEY);

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
