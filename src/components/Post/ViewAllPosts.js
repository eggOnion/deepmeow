import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EditPost from './EditPost.js';
import DeletePost from './DeletePost';

import renderVideoPreview from '../../utils/renderVideoPreview.js';
import renderVideoURLInText from '../../utils/renderVideoURLInText.js';

import '../../styles/commonPost.css';


const ViewAllPosts = ({ token, posts, setPosts }) => {

    const username = sessionStorage.getItem('username');
    const [editingPostId, setEditingPostId] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://mysocialmedia-deepmeow.vercel.app/viewAllPosts', {
                    headers: { Authorization: `Bearer ${token}` },
                    withCredentials: true
                });
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        if (token) fetchPosts();
    }, [token, setPosts]);


    const handlePostUpdated = (updatedPost) => {
        setPosts(posts.map((post) => (post._id === updatedPost._id ? updatedPost : post)));
        setEditingPostId(null);
    };

    const handlePostDeleted = (deletedPostId) => {
        setPosts(posts.filter((post) => post._id !== deletedPostId));
    };

    return (
        <div className="post-shared-style-container">
            {posts.length === 0 ? (
                <p>No posts yet.</p>
            ) : (
                posts.map((post) => {
                    const videoUrl = renderVideoPreview(post.text);

                    return (
                        <div key={post._id} className="post-shared-style">
                            {/* Always render the video preview */}
                            {videoUrl && (
                                <div className="video-preview">
                                    {videoUrl.includes("youtube.com") ? (
                                        <iframe
                                            src={videoUrl}
                                            title="YouTube Video"
                                            frameBorder="0"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <video controls>
                                            <source src={videoUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            )}

                            {editingPostId === post._id ? (
                                <EditPost
                                    postId={post._id}
                                    currentText={post.text}
                                    onPostUpdated={handlePostUpdated}
                                    onCancel={() => setEditingPostId(null)}
                                />
                            ) : (
                                <>
                                    <p>{renderVideoURLInText(post.text)}</p>
                                    <br />
                                    <small>Posted by {post.username}</small>
                                    {post.username === username && (
                                        <div className="post-shared-style-actions">
                                            <button
                                                className="post-shared-style-edit-btn"
                                                onClick={() => setEditingPostId(post._id)}
                                            >
                                                Edit
                                            </button>
                                            <DeletePost postId={post._id} onPostDeleted={handlePostDeleted} />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default ViewAllPosts;
