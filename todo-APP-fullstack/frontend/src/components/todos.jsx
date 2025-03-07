import { useContext } from "react";
import { TodoContext } from "../todoContext";

const Todos = () => {
    const { todosItem } = useContext(TodoContext);

    return (
        <div>
            <ul>
                {todosItem.map((todo, index) => (
                    <li key={todo._id || index}>
                        <div className="todoHead" >
                            <label htmlFor="check">
                                <h2>{todo.title}</h2>
                            </label>
                            <input type="checkbox" id="check" checked={todo.isCompleted} readOnly />
                        </div>

                        <p>{todo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;
