const Todos = () => {
    return (
        <div>
            <ul>
                {
                    todos.map(todo => <li>
                        <h2>todo.title</h2>
                        <p>todo.description</p>
                        <input type="checkbox" checked={todo.isCompleted} />
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Todos;