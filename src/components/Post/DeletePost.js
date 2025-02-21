import React, { useState } from 'react';
import axios from 'axios';

import '../../styles/deletePost.css';


const DeletePost = ({ postId, onPostDeleted }) => {

    const [showConfirm, setShowConfirm] = useState(false);
    const token = localStorage.getItem('token');

    // Handle post deletion
    const handleDelete = async () => {
        if (!token) {
            console.error('User is not authenticated');
            return;
        }

        try {
            await axios.delete(`https://mysocialmedia-deepmeow.vercel.app/posts/${postId}`, {
                headers: { Authorization: `Bearer ${token}` },
                withCredentials: true,
            });

            onPostDeleted(postId);
            setShowConfirm(false);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div style={{ display: 'inline-block' }}>
            <button
                className='user-post-delete-btn'
                onClick={() => setShowConfirm(true)}
            >
                Delete
            </button>

            {/* Delete Confirmation Popup */}
            {showConfirm && (
                <div className='delete-post'>
                    <div className="pop-out-overlay">
                        <div className='pop-up-window-delete'>
                            <p>Are you sure you want to delete this post?</p>
                            <button
                                onClick={handleDelete}
                                className='post-delete-confirm-btn'
                            >
                                Yes, Delete
                            </button>
                            <button
                                className='post-delete-cancel-btn'
                                onClick={() => setShowConfirm(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeletePost;
