import axios from 'axios';

const API_URL = 'https://mysocialmedia-deepmeow.vercel.app/viewAllPosts'; // Adjust backend URL

export const fetchPostss = async () => {
    try {
        const response = await axios.get(API_URL);
        // console.log('Fetched Posts:', response.data);      
        return response.data; // Return posts array
    } catch (error) {
        console.error('Error fetching posts:', error);
        // throw error;
        return [];
    }
};

