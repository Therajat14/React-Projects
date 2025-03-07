import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todosItem, setTodos] = useState([]); // ✅ Fixed state setter name

    // Fetch todos from API


    useEffect(() => {
        const fetchTodos = async () => {
            try {
                console.log("Fetching todos...");
                const response = await fetch("http://localhost:9000/todos");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setTodos(data); // ✅ Update state with fetched todos
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };
        fetchTodos();

        return () => {
            console.log("Cleanup: Component unmounted");
        };
    }, []);

    return (
        <TodoContext.Provider value={{ todosItem, setTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
