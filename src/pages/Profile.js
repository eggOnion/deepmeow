import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserPost from '../components/Post/UserPost';


const Profile = () => {

    const navigate = useNavigate();
    const username = sessionStorage.getItem('username');
    const token = localStorage.getItem('token');

    // Redirect to login if no token is found
    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token, navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>Welcome, {username || 'Guest'}!</p>
            <h2>Profile page.</h2>

            <UserPost token={token} />    {/* Show only the logged-in user's posts */}
        </div>
    );
};

export default Profile;
