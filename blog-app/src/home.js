import React from "react";
import "./home.css"; // Import CSS file

function Home({ post }) {
    return (
        <div className="home-container">
            <h4>Blog Feed</h4>
            {post.length > 0 ? (
                <ul className="post-list">
                    {post.map((post) => (
                        <li key={post.id} className="post-item">
                            <div className="post-content">
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-datetime">{new Date(post.datetime).toLocaleString()}</p>
                                <p className="post-body">
                                    {post.body.length < 25 ? post.body : `${post.body.substring(0, 45)}...`}
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

export default Home;
