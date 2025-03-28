import React from 'react';


function Blog({ post }) {
    return (
        <div >

            {post.length > 0 ? (
                <ul className="post-list">
                    {post.map((post) => (
                        <li key={post.id} className="post-item">
                            <div className="post-content">
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-datetime">{new Date(post.datetime).toLocaleString()}</p>
                                <p className="post-body">
                                    {post.body}
                                </p>

                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-posts">No posts available.</p>
            )}
        </div>
    );
}

export default Blog;