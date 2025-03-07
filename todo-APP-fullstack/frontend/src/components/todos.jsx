import { useContext, useState } from "react";
import { TodoContext } from "../todoContext";

const Todos = () => {
    const { todosItem, setTodos } = useContext(TodoContext);


    const markAsCompleted = async (todoId) => {
        try {
            const response = await fetch("http://localhost:9000/completed", {
                method: "PUT", // ✅ Use PUT for updates
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: todoId }) // ✅ Sending todo._id in body
            });


            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // setTodo(todosItem.map(todo =>
            //     todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
            // ));
            setTodos(todosItem.map(todo =>
                todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
            ));


            const data = await response.json();
            console.log("Todo Updated:", data);

        } catch (error) {
            console.error("Error updating todo:", error);
        }

    };

    return (
        <div className="todos">
            {todosItem.length < 1 && <p>No ToDO item  Present </p>}
            <ul>
                {todosItem.map((todo, index) => (
                    <li key={todo._id || index}>
                        <div className="todoHead" >
                            <label htmlFor="check">
                                <h2>{todo.title}</h2>
                            </label>
                            <input type="checkbox" id="check" checked={todo.isCompleted} onChange={() => {
                                markAsCompleted(todo._id)

                            }}
                            />
                        </div>
                        <div className="todoDetails">
                            <p>{todo.description}</p>
                            {/* <p className="todo-id"> id: {todo._id}</p> */}
                        </div>
                        <p className="todo-id"> id: {todo._id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
