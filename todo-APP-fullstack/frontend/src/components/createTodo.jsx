
export function CreateTodo() {
    return (<form
        onSubmit={
            (e) => { e.preventDefault() }
        }
    >
        <h1>Add  a new Todo</h1>
        <div className="inputCompo">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Title" />
            <label htmlFor="description"></label>
            <input type="textarea" id="description" name="description" placeholder="Description" className="textarea" />

        </div>
        <button type="submit">Add</button>

    </form>)
}