import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState([
        {
            "title": "Go to the gym",
            "description": "Complete a 1-hour workout session including cardio and weights.",
            "isCompleted": false
        },
        {
            "title": "Finish React project",
            "description": "Complete the Todo app and push the code to GitHub.",
            "isCompleted": true
        },
        {
            "title": "Read a book",
            "description": "Read 20 pages of 'Atomic Habits' by James Clear.",
            "isCompleted": false
        }
    ]
    );
    return (
        <TodoContext.Provider value={{ todo, setTodo }} >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;