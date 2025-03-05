import { useContext } from "react";
import TodoProvider, { TodoContext } from "../todoContext";

const Todos = () => {
    const { todos } = useContext(TodoContext);
    return (
        <div>
            <ul>
                {
                    todos.map(todo => <li>
                        <div className="todoHead">
                            <h2>{todo.title}</h2>
                            <input type="checkbox" checked={todo.isCompleted} />

                        </div>

                        <p>{todo.description}</p>

                    </li>)
                }
            </ul>
        </div>
    )
}

export default Todos;