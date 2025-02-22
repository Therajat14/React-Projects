import React from 'react';
import { useParams } from 'react-router-dom';

const Post = ({ post }) => {
    const { id } = useParams();
    const item = post.find(item => item.id.toString() === id);

    if (!item) {
        return <h2>Post not found</h2>;
    }

    return (
        <div className="post-content">
            <h1 className="post-title">{item.title}</h1>
            <p className="post-datetime">{new Date(item.datetime).toLocaleString()}</p>
            <p className="post-body">{item.body}  </p>

            <button> Delete Post</button>

        </div>
    );
};

export default Post;
