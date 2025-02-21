import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { registerUser } from '../services/fetchAPI';

import '../styles/register.css';


const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await registerUser(formData);
            setSuccess(response.message);
            // setTimeout(() => navigate('/login'), 2000);
            setFormData({
                username: '',
                email: '',
                password: ''
            });
        } catch (error) {
            setError(error.message || 'Something went wrong');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
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
                <button type="submit">Register</button>
                <p style={{ fontSize: '15px' }}>Alreay have an account? Click here to
                    <Link style={{ color: 'green' }} to="/"> Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
