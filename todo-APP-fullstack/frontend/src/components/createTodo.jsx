import { useContext, useState } from "react";
import { TodoContext } from "../todoContext";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { todosItem, setTodos } = useContext(TodoContext); // ✅ Fixed incorrect variable name

    const handleSubmit = (e) => {
        e.preventDefault(); // ✅ Prevent page refresh

        fetch("http://localhost:9000/todo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                description: description
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {

                setTodos([data.todo, ...todosItem]); // ✅ Update state
                setTitle(""); // ✅ Clear input fields
                setDescription("");
            })
            .catch(error => console.error("Error adding todo:", error));
    };

    return (
        <div className="footer">
            <form onSubmit={handleSubmit}>
                <h1>Add a New Todo</h1>
                <div className="inputCompo">
                    <label htmlFor="title"></label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label htmlFor="description"></label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        className="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
