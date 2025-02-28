import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEdit, } from 'react-icons/fa';
import { ImBin } from "react-icons/im";
import { Link } from 'react-router-dom';

const Post = ({ post, handleDelete, handleEdit = () => { } }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = post.find(item => item.id.toString() === id);

    if (!item) {
        return <h2>Post not found</h2>;
    }

    return (
        <div className="post-content">
            <h1 className="post-title">{item.title}</h1>
            <p className="post-datetime">{new Date(item.datetime).toLocaleString()}</p>
            <p className="post-body">{item.body}  </p>

            <div className="bttns">
                <button onClick={() => {

                    handleDelete(id);
                    navigate("/")

                }}> Delete Post <ImBin /></button>


                <Link to={`/editpost/${id}/${encodeURIComponent(item.title)}/${encodeURIComponent(item.body)}`}>
                    <button onClick={() => {

                        handleEdit(id);


                    }}> Edit Post <FaEdit /></button>
                </Link>
            </div>


        </div>
    );
};

export default Post;
