import React, { useState } from 'react';
import axios from 'axios';

import '../../styles/createPost.css';


const CreatePost = ({ onPostCreated }) => {

    const [postText, setPostText] = useState('');
    const token = localStorage.getItem('token');

    // Handle post submission
    const handlePost = async () => {
        if (!token) {
            console.error('User is not authenticated');
            return;
        }

        if (postText.trim() === '') return;

        try {            
            const response = await axios.post(
                'https://mysocialmedia-deepmeow.vercel.app/posts',
                { text: postText },
                { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }                
            );            

            // Notify parent component to update post list
            onPostCreated(response.data.post);

            // Clear input after posting
            setPostText('');
        } catch (error) {
            console.log("eee", token);
            console.error('Error posting:', error);
        }
    };

    return (
        <body>
            <div className='post-creation-container'>
                <div>
                    <textarea
                        className='user-create-post'
                        placeholder="What's on my mind..."
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                    ></textarea>
                </div>
                <br />
                <div className='user-submit-post'>
                    <button className='post-submit-btn' onClick={handlePost}>
                        Post
                    </button>
                </div>
            </div>
        </body>
    );
};

export default CreatePost;
