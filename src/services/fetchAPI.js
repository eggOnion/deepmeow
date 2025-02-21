import axios from 'axios';

const API_URL = 'https://mysocialmedia-deepmeow.vercel.app';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/viewAllPosts`);
        // console.log('Fetched Posts:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        // throw error;
        return [];
    }
};


export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/register`, userData);
        return response.data; // Return success message and user data
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        throw error.response?.data || { message: "Registration failed" };
    }
};


export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, userData, { withCredentials: true });
        return response.data; // Return user data and token
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        throw error.response?.data || { message: "Login failed" };
    }
};

// Automatically add token to requests
export const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// Example: Fetch user profile
export const fetchProfile = async () => {
    try {
        const response = await axios.get(`${API_URL}/users/profile`, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch profile' };
    }
};


export const logoutUser = async () => {
    try {
        await axios.post(`${API_URL}/users/logout`, {}, { withCredentials: true });

        // Clear stored authentication data
        localStorage.removeItem('token');
        sessionStorage.removeItem('username');

        return { message: 'Logged out successfully' };
    } catch (error) {
        throw error.response?.data || { message: 'Logout failed' };
    }
};


export const createPost = async (postData) => {
    try {
        const token = localStorage.getItem('token'); // Retrieve the JWT token

        if (!token) {
            throw new Error('User not authenticated');
        }

        const response = await axios.post(`${API_URL}/posts`, postData, {
            headers: {
                'Authorization': `Bearer ${token}`, // Send JWT token in headers
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to create post' };
    }
};


