import { FaComment, FaUser, FaRegEdit } from "react-icons/fa"

const Buttons = ({ setButtonState }) => {

    const userButtonHandeler = () => setButtonState("users");
    const commentButtonHandeler = () => setButtonState("comments");
    const PostButtonHandeler = () => setButtonState("posts");

    return (
        <div className="buttons">
            <button className="users" onClick={userButtonHandeler}>Users <FaUser /></button>
            <button className="posts" onClick={PostButtonHandeler}>Post <FaRegEdit /></button>
            <button className="comments" onClick={commentButtonHandeler}>Comments <FaComment /></button>
        </div>
    )
}

export default Buttons;