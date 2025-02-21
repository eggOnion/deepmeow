import React, { useState } from 'react';

import ViewAllPosts from '../components/Post/ViewAllPosts.js';
import CreatePost from './../components/Post/CreatePost';


const Home = () => {
   
    const username = sessionStorage.getItem('username');
    const token = localStorage.getItem('token');

    const [posts, setPosts] = useState([]);

    // Update the post list when a new post is created
    const handlePostCreated = (newPost) => {
        setPosts([newPost, ...posts]); // Add new post at the top
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>Welcome, {username || 'Guest'}!</p>
            <h2>News feed page.</h2>
            <div>
                <CreatePost onPostCreated={handlePostCreated} />
                <ViewAllPosts token={token} posts={posts} setPosts={setPosts} />
            </div>
        </div>
    );
};

export default Home;
