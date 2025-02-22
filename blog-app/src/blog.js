import React from 'react';


const Blog = () => {
    return (
        <div className="blog-container">

            <main className="blog-content">
                <article className="blog-post">
                    <h2>Blog Post Title</h2>
                    <p>Posted on January 1, 2023</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        scelerisque leo nec magna fermentum, a tincidunt lorem facilisis.
                        Integer nec odio nec nulla facilisis tincidunt.
                    </p>
                </article>
                <article className="blog-post">
                    <h2>Another Blog Post</h2>
                    <p>Posted on February 1, 2023</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        scelerisque leo nec magna fermentum, a tincidunt lorem facilisis.
                        Integer nec odio nec nulla facilisis tincidunt.
                    </p>
                </article>
            </main>
            <footer className="blog-footer">
                <p>&copy; 2023 My Blog. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Blog;