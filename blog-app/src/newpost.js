import { useState } from "react";
import { useNavigate } from "react-router";


const NewPost = ({ handelSubmit }) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <h2>Create a new Post</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!title || !body) {
                    alert("Both fields are required!");
                    return;
                }

                handelSubmit(title, body);
                navigate('/')



            }}>
                <label htmlFor="title"></label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="body"></label>
                <textarea
                    id="body"
                    placeholder="Write your blog post here..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Create Post</button>

            </form>
        </>
    )
}
export default NewPost;