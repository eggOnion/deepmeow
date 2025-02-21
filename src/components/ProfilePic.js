import React from 'react';
import { useNavigate } from 'react-router-dom';

import profile_pic from '../assets/profile_pic.png'; // Logged-in user profile
import guest_pic from '../assets/guest_pic.png'; // Guest user profile

import '../styles/profilePic.css';


const ProfilePic = () => {

    const navigate = useNavigate();

    const isAuthenticated = !!localStorage.getItem('token');

    const handleClick = () => {
        if (isAuthenticated) {
            navigate('/profile');
            window.scrollTo(0, 0);
            window.location.reload();
        }
    };

    return (
        <img
            className='profile-pic'
            src={isAuthenticated ? profile_pic : guest_pic}
            alt={isAuthenticated ? "User Profile" : "Guest Profile"}
            onClick={isAuthenticated ? handleClick : undefined} // Navigate only if user is authenticated
            style={{ cursor: isAuthenticated ? 'pointer' : 'default' }} // Change cursor only if clickable
        />
    );
};

export default ProfilePic;
