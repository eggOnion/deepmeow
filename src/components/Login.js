import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../services/fetchAPI';

import '../styles/login.css';


const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await loginUser(formData);
            // console.log('Login successful:', response);

            // Store the token in localStorage for future API requests
            localStorage.setItem('token', response.token);

            // Store the username in session storage (for Profile page display)
            sessionStorage.setItem('username', formData.username);

            // Redirect user to the Profile page upon login        
            navigate('/profile');
            window.location.reload();
        } catch (error) {
            setError(error.message || 'Invalid credentials');
            setFormData({
                username: '',
                password: ''
            });
        }
    };

    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
                <p className='account-checker'>Don't have an account?</p>
                <button
                    className='register-btn'
                    onClick={handleRegister}
                >
                    Create an account
                </button>
            </form>
        </div>
    );
};

export default Login;
