
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useEffect } from "react";
const EditPost = ({ body, title, editTitle, editBody, setEditTitle, setEditBody, handleEdit }) => {


    const navigate = useNavigate();

    const { id, Etitle, Ebody } = useParams();
    useEffect(() => {
        setEditTitle(decodeURIComponent(Etitle));
        setEditBody(decodeURIComponent(Ebody));
    }, [Etitle, Ebody, setEditTitle, setEditBody]);


    return (
        <>
            <h2>Edit Post</h2>
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    if (!editTitle || !editBody) {
                        alert("Both fields are required!");
                        return;
                    }
                    handleEdit(id);

                    navigate('/')



                }}>
                <label htmlFor="title"></label>
                <input

                    type="text"
                    id="title"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    required
                />

                <label htmlFor="body"></label>
                <textarea
                    id="body"
                    className="editTextArea"
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    required
                ></textarea>

                <button type="submit">Submit Edit</button>

            </form>
        </>
    )
}
export default EditPost;