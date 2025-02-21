import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CreatePost from './CreatePost';
import EditPost from './EditPost';
import DeletePost from './DeletePost';

import renderVideoPreview from '../../utils/renderVideoPreview';
import renderVideoURLInText from '../../utils/renderVideoURLInText';

import '../../styles/commonPost.css';


const UserPost = ({ token }) => {

    const [userPosts, setUserPosts] = useState([]);
    const [editingPostId, setEditingPostId] = useState(null);
    const username = sessionStorage.getItem('username');

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await axios.get('https://mysocialmedia-deepmeow.vercel.app/viewAllPosts', {
                    headers: { Authorization: `Bearer ${token}` },
                    withCredentials: true
                });

                const filteredPosts = response.data.posts.filter(post => post.username === username);
                setUserPosts(filteredPosts);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        if (token) fetchUserPosts();
    }, [token, username]);

    const handlePostDeleted = (deletedPostId) => {
        setUserPosts(userPosts.filter(post => post._id !== deletedPostId));
    };

    const handlePostUpdated = (updatedPost) => {
        setUserPosts(userPosts.map(post => (post._id === updatedPost._id ? updatedPost : post)));
        setEditingPostId(null);
    };

    const handlePostCreated = (newPost) => {
        setUserPosts([newPost, ...userPosts]);
    };

    return (
        <div>
            <CreatePost onPostCreated={handlePostCreated} />

            <div className='post-shared-style-container'>
                {userPosts.length === 0 ? (
                    <p>No posts yet.</p>
                ) : (
                    userPosts.map((post) => {
                        const videoUrl = renderVideoPreview(post.text);

                        return (
                            <div className='post-shared-style' key={post._id}>
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
                                        <small>Posted by {post.username}</small>
                                        <br />
                                        <div className='post-shared-style-actions'>
                                            <button
                                                className='post-shared-style-edit-btn'
                                                onClick={() => setEditingPostId(post._id)}
                                            >
                                                Edit
                                            </button>
                                            <DeletePost postId={post._id} onPostDeleted={handlePostDeleted} />
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default UserPost;
