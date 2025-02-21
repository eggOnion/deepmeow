import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../services/fetchAPI';

import '../styles/logout.css';


const Logout = () => {
    const navigate = useNavigate();
    const [showConfirm, setShowConfirm] = useState(false);
    const isAuthenticated = !!localStorage.getItem('token');

    const handleLogout = async () => {
        try {
            await logoutUser();
            localStorage.removeItem('token');
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error('Logout error:', error.message);
        }
    };

    return (
        <>
            {isAuthenticated && (
                <button className="logout-btn" onClick={() => setShowConfirm(true)}>
                    Logout
                </button>
            )}

            {showConfirm && (
                <div className="logout-popup-overlay">
                    <div className="logout-popup">
                        <p>Are you sure you want to log out?</p>
                        <button onClick={handleLogout} className="logout-confirm-btn">Yes, Logout</button>
                        <button onClick={() => setShowConfirm(false)} className="logout-cancel-btn">Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Logout;
