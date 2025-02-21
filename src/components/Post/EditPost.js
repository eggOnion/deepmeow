import React, { useState } from 'react';
import axios from 'axios';

import '../../styles/editPost.css';


const EditPost = ({ postId, currentText, onPostUpdated, onCancel }) => {

    const [newText, setNewText] = useState(currentText);
    const token = localStorage.getItem('token');

    const handleEdit = async () => {
        if (!token) {
            console.error('User is not authenticated');
            return;
        }

        if (newText.trim() === '') return;

        try {
            const response = await axios.put(
                `https://mysocialmedia-deepmeow.vercel.app/posts/${postId}`,
                { text: newText },
                { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
            );

            // Notify parent component to update post list
            onPostUpdated(response.data.updatedPost);
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <div className='edit-post-container'>
            <textarea
                className='edited-post-textarea'
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
            />
            <br />
            <button className='edit-post-save-btn' onClick={handleEdit}>
                Save
            </button>
            <button className='edit-post-cancel-btn' onClick={onCancel}>
                Cancel
            </button>
        </div>
    );
};

export default EditPost;
